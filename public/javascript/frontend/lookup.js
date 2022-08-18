
/*
const submitButton = document.getElementById("submit-callsign");

submitButton.on
function processLookupCallsign() { 
    const submitButton = document.getElementById("submit-callsign");
    submitButton.onclick = (event) => {
        console.log("Testing321");
    };
};
module.exports.processLookupCallsign = processLookupCallsign;
*/

const lookupLogic = {};
async function processLookupCallsign(req, res, next) {
    console.log(req["callook-field"]);
    next();
}
lookupLogic.processLookupCallsign = processLookupCallsign;
module.exports = lookupLogic;