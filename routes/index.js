var express = require('express');
var router = express.Router();
var indexLogic = require('../controller/index')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RadioCallsignGenerator', bodyIndex: "Hello Kaz, and John." });
});

router.get('/registration', function(req, res, next) {
  res.render('registration', { title: 'Registration'}); 
})

router.post('/registration', 
  indexLogic.processRegistration
)

module.exports = router;