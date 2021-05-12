const jwt = require("jsonwebtoken"); 
const db = require('../models/index'); 

exports.signup = async function(req, res, next) {}; 

exports.signin = async function(req, res, next) {
    // create a user 
    let user = await db.User.create(req.body); 
    let {id , username, profileImageUrl} = user; 
    let token = 


}