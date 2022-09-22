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

router.get('/deleteLicense', (req, res) => {
    res.render("delete");
})

router.post('/deleteLicense', 
    lookupLogic.processDeleteCallsign
)

router.post('/getLicense', 
    lookupLogic.processLookupCallsign
)

module.exports = router; 