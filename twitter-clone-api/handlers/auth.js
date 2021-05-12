const jwt = require("jsonwebtoken"); 
const db = require('../models/'); 

exports.signin = async function(req, res, next) {}; 

exports.signup = async function(req, res, next) {
    try {
        // create a user 
    let user = await db.User.create(req.body); 
    let {id , username, profileImageUrl} = user; 
    // create a token
    let token = jwt.sign({
        id,
        username, 
        profileImageUrl
    }, process.env.SECRET_KEY); 
    
    return res.status(200).json({
        id, 
        username, 
        profileImageUrl, 
        token
    });

    }catch (error) {
        if (error.code === 11000) {
            error.message = "sorry! the username or email is wrong!";
        }
        return next({
            status : 400, 
            message: error.message
        });

    }
    

    

    


}