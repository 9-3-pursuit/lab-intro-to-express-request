const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome 99 Pokemon");
});

app.get('/:verb/:adjective/:noun', (req, res) => {
    const { verb, adjective, noun} = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

app.get('/bugs', (req, res) => {
    res.send(
    "<h1>99 little bugs in the code</h1>" +
    "<a href='/bugs/101'>pull one down, patch it around</a>"
    );
});

app.get('/bugs/:numberOfBugs', (req, res) => {
    const { numberOfBugs } = req.params;
    let link = `<a href='/bugs/${parseInt(numberOfBugs) + 2}'>Pull one down, patch it around</a>`
    if (( numberOfBugs >= 200)) {
        link = "<a href='/bugs'>Too many bugs!! Start over!</a>"
      }
    res.send(
        `<h1>${numberOfBugs} little bugs in the code</h1>` +
        link
    );
});
const pokemon = require("./models/pokemon.json");
app.get('/pokemon', (req, res) => {
    res.send(pokemon);
});

app.get('/pokemon/search', (req, res) => {
    const searchedPokemon = pokemon.find((poke) => poke.name.toUpperCase() === req.query.name || poke.name === req.query.name || poke.name.toLowerCase() === req.query.name);
    if (searchedPokemon) {
        res.send([searchedPokemon]);
    } else {
        res.send([]);
    }
});

app.get('/pokemon/:indexOfArray', (req, res) => {
    const { indexOfArray } = req.params;
    if (pokemon[indexOfArray]) {
        res.send(pokemon[indexOfArray]);
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }
});

module.exports = app;
