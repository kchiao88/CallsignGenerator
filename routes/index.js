var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RadioCallsignGenerator', bodyIndex: "Hello Kaz, and John." });
});

router.get('/registration', function(req, res, next) {
  res.render('registration', { title: 'Registration'})
})

router.post('/registration', function(req, res, next) {
  const username = req.body.username
  const password = req.body.password
  const emailAddress = req.body.email
  const accessKey = req.body.key
  const emailRe = /^\w+@([a-zA-Z_]|[0-9])+?\.[a-zA-Z]{2,3}$/
  const emailCheck = emailAddress.match(emailRe)
  console.log(emailCheck)
  if (emailCheck) {
    res.send("Success")
  } else {
    res.send("Failure")
    // To-Do: Add middleware that warns people
  }
})

module.exports = router;