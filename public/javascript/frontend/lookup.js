/* let callsign = new URL(req.url).searchParams.get("callsign");
    let data = await fetch(`https://callook.info/${callsign}/json`)
        .then(response => response.json())
    // console.log(data);
    if (data.status === "INVALID") {
        return new Response("Not found", {status: 404});
    }
    licenseCache[callsign] = data;
    return new Response(JSON.stringify(data, null, 4));
*/
function processLookupCallsign() { 
    const submitButton = document.getElementById("submit-callsign");
    submitButton.onclick = (event) => {
        console.log("Testing321");
    };
};
module.exports.processLookupCallsign = processLookupCallsign;