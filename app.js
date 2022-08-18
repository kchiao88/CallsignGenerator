const express = require('express');
const app = express();
const port = 3000
const path = require("path");

app.get('/', (req, res) => {
    const absolutePath = path.resolve("./public/views/index.html");
    res.sendFile(absolutePath);
})

app.get('/getLicense', (req, res) => {
    // TODO: GRAB CALLSIGN FROM PARAMETERS LIST IN URL
    const absolutePath = path.resolve("./public/views/lookup.html");
    res.sendFile(absolutePath);
})

app.post('/getLicense', 
    (req, res) => {
        
    },
    (req, res) => {
    console.log("Hi");
    res.send("/getLicense done.")
})

app.get('/licenses', (req, res) => {
    res.send('World Goodbye!')
})

app.listen(port, () => {
    console.log(`Radio Callsign app listening on port ${port}`)
})