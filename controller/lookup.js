const fs = require('fs');

const lookupLogic = {};
async function processLookupCallsign(req, res, next) {
    callsign = req.body.callsign; 
    // TODO: Use the callsign variable to obtain data of callsigns related to user input.
    // NOTE: variable 'callsign' contains user input from the online form in "lookup.hbs."
    console.log(callsign); 
    let data = await fetch(`https://callook.info/${callsign}/json`)
        .then(response => response.json())
    if (data.status === "INVALID") {
        res.send("Not found")
    }
    const fileName = "./licenses/" + callsign + ".json";
    fs.writeFile(fileName, JSON.stringify(data), (error)=>{
        if (error) {
            console.log(error);
        } else {
            console.log("Success");
        }
    })

    //res.render() //unlock once we create a results page. 
    res.send(data); 
}
lookupLogic.processLookupCallsign = processLookupCallsign;
async function processDeleteCallsign(req, res, next) {
    callsign = req.body.callsign;
    // TODO: Use fs to delete the file
}
lookupLogic.processDeleteCallsign = processDeleteCallsign;
module.exports = lookupLogic;