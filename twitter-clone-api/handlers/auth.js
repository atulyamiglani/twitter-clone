const jwt = require("jsonwebtoken"); 
const db = require('../models/'); 

exports.signin = async function(req, res, next) {
    try {
        // find the user 
        let user = await db.User.findOne({
            email : req.body.email 
        });

        let {email, username, profileImageUrl} = user; 
        let isMatch = await user.comparePassword(req.body.password); 
        if (isMatch) {
            let token = jwt.sign({
                email, 
                username, 
                profileImageUrl
            }, 
            process.env.SECRET_KEY
            ); 
            return res.status(200).json({
                email, 
                username, 
                profileImageUrl, 
                token
            })
        }
        else {
            return next({
                status: 400,
                message: 'Invalid email/ password'
            })
        }
        // check if the password matches
        // create a token if it does and return the token

    }catch(error) {
        return next({
            status: 400,
            message: 'something went wrong'
        })
        // else send an error in next parameter
        

    }
}; 

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