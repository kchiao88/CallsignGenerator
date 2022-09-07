

const lookupLogic = {};
async function processLookupCallsign(req, res, next) {
    callsign = req.body.callsign; 
    // TODO: Use the callsign variable to obtain data of callsigns related to user input.
    // NOTE: variable 'callsign' contains user input from the online form in "lookup.hbs."
    console.log(callsign); 
    next();
}
lookupLogic.processLookupCallsign = processLookupCallsign;
module.exports = lookupLogic;