// Dependencies
const express = require("express")
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

// Configuration
const app = express()

// Routes
app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon 🪰")
})

app.get("/:verb/:adjective/:noun", (req,res) => {
    const {verb, adjective, noun} = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`)
})