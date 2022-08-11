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