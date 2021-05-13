const mongoose = require('mongoose'); 
const User = require('./user'); 

const messageSchema = new mongoose.Schema({
    message : {
        type : String, 
        required : true, 
        maxLength: 256
    }, 
    user : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }
}); 

// before deleting the message, remove it from the messages list of the user
messageSchema.pre("remove", async function(next) {
    
    try {
        // find the user of the message
        let user = User.findById(this.user);
        // remove the id the of the message from their list of messages 
        user.message.remove(this.id);
        // save the user 
        user.save();
        // return next 
        return next();
    }catch (err) {
        return next(err);

    }


})

const Message = mongoose.model("Message", messageSchema); 

module.exports = Message; 