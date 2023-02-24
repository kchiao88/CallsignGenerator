const fs = require('fs');
const bcrypt = require('bcrypt');
const dbEngine = require('./db-controller');

const indexLogic = {};

// TODO: Create the middleware logic for the login, logout and registration mechanic here.
const properAccessKey = "6417Key"

async function processRegistration(req, res, next) {
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
        // res.send("Hello World");
        // TODO: Use BCrypt and store the Account information into the User Data table.
        let hashPassword = null;
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, function(err, hash) {
                console.log(hash);
                if (err) {
                    console.log(err);
                    next(err);
                }
                hashPassword = hash;
            })
        })
        
        await dbEngine.insertUser(username, emailAddress, first_name, last_name, hashPassword, radio_callsign);
        res.send("Success");

    } else {
        res.send("Failure"); 
    }
}

indexLogic.processRegistration = processRegistration;
module.exports = indexLogic;