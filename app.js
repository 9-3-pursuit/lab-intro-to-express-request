const express = require("express");
const app = express()

app.get("/", (req, res) => {
    res.send("Intro to express response")
})

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

app.get("/bugs", (req, res) => {
    res.send("99 little bugs in the code")
})

module.exports = app;