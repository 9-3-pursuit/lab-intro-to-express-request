const express = require("express");
const pokemon = require("./models/pokemon.json");
const app = express();

app.get("/", (req, res) => {
    res.send("Intro to express response")
})

// project name generator

app.get("/:verb/:adjective/:noun", (req, res) => {
    const { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
})

// bugs in the code

app.get("/bugs", (req, res) => {
    res.send(`
        <p>99 little bugs in the code</p>
        <p>99 little bugs</p>
        <p><a href="/bugs/101">pull</a> one down, patch it around</p>
        <p>101 little bugs in the code</p>
    `)
})

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params;

    if (numberOfBugs > 200) {
        res.send(`
    <p>${numberOfBugs} little bugs in the code</p>
    <p>Too many little bugs, <a href="/bugs">start over</a></p>
    `)
    }
    res.send(`
    <p>${numberOfBugs} little bugs in the code</p>
    <p>${numberOfBugs} little bugs</p>
    <p><a href="/bugs/${Number(numberOfBugs) + 2}">pull</a> one down, patch it around</p>
    <p>${Number(numberOfBugs) + 2} little bugs in the code</p>
    `)
})

// poke-express

app.get("/pokemon", (req, res) => {
    res.send(`<ul>${pokemon.map(pokemon => `<li>${pokemon.name}</li>`)}</ul>`)
})

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query;

    res.send(pokemon.find(pokemon => pokemon.name.toLowerCase() === name.toLowerCase()))
})

app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params;

    function determineWholeNumber(number) {
        let result = (number - Math.floor(number)) === 0;
        if (result) {
            return true
        } else {
            return false
        }
    }

    if (indexOfArray >= 0 && determineWholeNumber(indexOfArray) && indexOfArray < 151) {
        res.send(pokemon[indexOfArray])
    } else {
        res.send(`sorry, no pokemon found at /pokemon${indexOfArray}`)
    }
})

module.exports = app;