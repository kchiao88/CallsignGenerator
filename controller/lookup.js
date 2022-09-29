const fs = require('fs');

const lookupLogic = {};
async function processLookupCallsign(req, res, next) {
    // *TODO*: make function better by looking if callsign exists in file system
    callsign = req.body.callsign; 
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
    res.render("display", {callsign: callsign, 
        latitude: data.location.latitude, 
        longitude: data.location.longitude,
        status: data.status,
        class: data.current.operClass,
        name: data.name,
        frn: data.otherInfo.frn,
        address: data.address.line2,
        grid: data.location.gridsquare,
        grantDate: data.otherInfo.grantDate,
        expiryDate: data.otherInfo.expiryDate,
        url: data.otherInfo.ulsUrl
    }); 
}
lookupLogic.processLookupCallsign = processLookupCallsign;
async function processDeleteCallsign(req, res, next) {
    callsign = req.body.callsign;
    console.log(callsign);
    fs.unlink("./licenses/" + callsign + ".json", function (err) {
        let path = "./licenses/" + callsign + ".json";
        if (err) {
            console.error(err);
            res.send(err);
        } else {
            console.log("File removed:", path);
            res.send("Success");
        }
    });
    // TODO: Use fs to delete the file
}
lookupLogic.processDeleteCallsign = processDeleteCallsign;
module.exports = lookupLogic;