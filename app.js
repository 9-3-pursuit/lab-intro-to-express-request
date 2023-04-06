const express = require('express');

const app = express();
const pokemon = require('./models/pokemon.json');
console.log(pokemon[0]);

require('dotenv').config();

app.get('/:verb/:adjective/:noun', (req, res) => {
	const { verb, adjective, noun } = req.params;
	res.send(
		`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
	);
});

app.get('/', (req, res) => {
	res.send('Welcome 99 Pokemon');
});

app.get('/bugs', (req, res) => {
	res.send(`
    <h1
    99 little bugs in the code
    99 little bugs </h1>
    <a href="/bugs/101">pull one down, patch it around</a>
    `);
});

app.get('/bugs/:numberOfBugs', (req, res) => {
	const numberOfBugs = req.params.numberOfBugs;
	const bugInfo = parseInt(numberOfBugs);
	if (bugInfo < 200) {
		res.send(`
        <h1>${bugInfo} little bugs in the code</h1>
        <a href="/bugs/${bugInfo + 2}"Pull one down, patch it around</a>
        `);
	} else {
		res.send(`
        <h1>${bugInfo} little bugs in the code</h1>
         <a href="/bugs">Too many bugs!! Start over!</a>
    `);
	}
});

// showing all pokemon
app.get('/pokemon', (req, res) => {
	res.send(pokemon);
});

// search parameter
app.get('/pokemon/search', (req, res) => {
	const search = req.query.name;
	const pokemonSearch = pokemon.find((pokemon) => {
		return pokemon.name.toLowerCase() === search.toLowerCase();
	});

	if (pokemonSearch) {
		res.send([pokemonSearch]);
	} else {
		res.send([]);
	}
});

// return 1 pokemon at the array position
app.get('/pokemon/:indexOfArray', (req, res) => {
	const indexOfArray = req.params.indexOfArray;

	if (pokemon[indexOfArray]) {
		res.send(pokemon[indexOfArray]);
	} else {
		res.send(`Sorry, no pokemon found at ${indexOfArray}`);
	}
});

module.exports = app;