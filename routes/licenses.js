var express = require('express');
var router = express.Router();

var lookupLogic = require('../controller/lookup'); 

router.get('/', (req, res) => {
    res.send('Hello World, Goodbye!')
})

router.get('/getLicense', (req, res) => {
    // TODO: GRAB CALLSIGN FROM PARAMETERS LIST IN URL
    res.render("lookup");
})

router.post('/getLicense', 
    lookupLogic.processLookupCallsign,
    (req, res) => {
    console.log("Hi");
    res.send("/getLicense done.")
})

module.exports = router; 