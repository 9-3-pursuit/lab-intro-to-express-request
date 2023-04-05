//Dependencies
const express = require("express");

//Configuration
const app = express();

//Routes
app.get("/:verb/:adjective/:noun", (req, res) => {
    const {verb, adjective, noun} = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
});
app.get("/bugs/:numberOfBugs", (req, res) => {
    const {numberOfBugs} = req.params;
    if (Number(numberOfBugs) >= 200){
        res.send(`
        <h2>Too many bugs!! Start over!</h2>
        <a href="/bugs">Start Over</a>
        `)
    } else {
        
        res.send(`
        <h2>${numberOfBugs} little bugs in the code</h2>
        <a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>
        `)
    }
})
app.get("/bugs", (req, res) => {
    res.send(`
    <h2>99 little bugs in the code</h2>
    <a href="/bugs/101">Pull one down, Patch it around</a>
    `)
});


// EXPORT
module.exports = app;