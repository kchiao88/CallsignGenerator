const fs = require('fs');
const bcrypt = require('bcrypt');

const indexLogic = {};

// TODO: Create the middleware logic for the login, logout and registration mechanic here.
const properAccessKey = "6417Key"

function processRegistration(req, res, next) {
    const username = req.body.username; 
    const password = req.body.password; 
    const emailAddress = req.body.email; 
    const accessKey = req.body.key; 
    const emailRe = /^\w+@([a-zA-Z_]|[0-9])+?\.[a-zA-Z]{2,3}$/; 
    const emailCheck = emailAddress.match(emailRe); 
    const passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/; 
    const passwordCheck = password.match(passwordRe); 

    console.log(emailCheck + " : emailCheck"); 
    console.log(accessKey === properAccessKey + " :accessKey"); 
    if (passwordCheck && emailCheck && accessKey === properAccessKey) {
        res.send("Hello World");
        // TODO: Use BCrypt and store the Account information into the User Data table. 
    } else {
        res.send("Failure"); 
    }
}

indexLogic.processRegistration = processRegistration;
module.exports = indexLogic;