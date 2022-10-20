const fs = require('fs');

const lookupLogic = {};
async function processLookupCallsign(req, res, next) {
    // *TODO*: make function better by looking if callsign exists in file system
    callsign = req.body.callsign; // coming from lookup.hbs (user input)
    // NOTE: variable 'callsign' contains user input from the online form in "lookup.hbs."
    const myRegex = /[AKNWaknw][a-zA-Z]{0,2}[0-9][a-zA-Z]{1,3}/;
    const result = myRegex.test(callsign);
    if (!result) {
        res.render("lookup", {
            message: "Invalid Callsign - Please Try Again"
        })
    } else {

        console.log(result);
        console.log(callsign);
        const path = "./licenses/" + callsign + ".json";
        if (fs.exists(path, (isExist) => {
            if (isExist) {
                console.log("File already exists")
            } else {
                console.log("File doesn't exist")
            }
        } )) {
            console.log("Case 1")
            fs.readFile(path, (error, content) => {
                if (error) {
                    console.log("Error reading the file")
                } else {
                    const data = JSON.parse(content);
                    console.log(data)
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
            })
        } else {
            console.log("Case 2")
            let data = await fetch(`https://callook.info/${callsign}/json`)
            .then(response => response.json())
            if (data.status === "INVALID") {
                // res.send("Not found")
                // next()
                res.render("lookup", {
                    message: "Invalid Callsign - Please Try Again"
                });
            } else {
                // Creating new JSON file to store callsign data 
                const fileName = "./licenses/" + callsign + ".json";
                fs.writeFile(fileName, JSON.stringify(data), (error)=>{
                    if (error) {
                        console.log(error);
                    } else {
                        console.log("Success");
                    }
                })

                // Pulling callsign information from data variable
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

        }
    }
}
lookupLogic.processLookupCallsign = processLookupCallsign;
async function processDeleteCallsign(req, res, next) {
    callsign = req.body.callsign;
    console.log(callsign);
    fs.unlink("./licenses/" + callsign + ".json", function (err) {
        let path = "./licenses/" + callsign + ".json";
        if (err) {
            console.error(err);
            console.log("WE'RE HERE***")
            // next()
            res.render("delete", {
                message: "Invalid Callsign - Please Try Again"
            });
        } else {
            console.log("File removed:", path);
            res.render("onSuccessDelete");
        }
    });
    // TODO: Use fs to delete the file
}
lookupLogic.processDeleteCallsign = processDeleteCallsign;
module.exports = lookupLogic;