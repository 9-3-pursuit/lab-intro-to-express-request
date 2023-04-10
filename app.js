const express = require('express')
const app = express()
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

app.get('/', (request, response) => {
    response.send('Welcome 99 Pokemon')
})

app.get('/:verb/:adjective/:noun', (request, response) => {
    const { verb, adjective, noun } = request.params
    response.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
} )

app.get('/bugs', (request, response) => {
    response.send('<h1>99 little bugs in the code</h1>')
})

app.get('/bugs/:numberOfBugs', (request, response) => {
    const { numberOfBugs } = request.params
    if (numberOfBugs > 199) {
        response.send('Too many bugs!! Start over!')
    } else {
        const message = `${numberOfBugs} little bugs in the code`;
        const nextUrl = `/bugs/${Number(numberOfBugs)+2}`;
        const nextLink = `<a href="${nextUrl}">Pull one down, patch it around</a>`;
        response.send(` ${message} ${nextLink}` );
    }
})

app.get('/pokemon', (request, response) => {
    response.send(pokemon)
})

app.get('/pokemon/search', (request, response) => {
    
    const search = pokemon.find((poke) => poke.name.toUpperCase() === request.query.name.toUpperCase())
    if (search) {
        response.send([search])
    } else {
        response.send([])
    }
})

app.get('/pokemon/:indexOfArray', (request, response) => {
    const index = Number(request.params.indexOfArray);
    if (isNaN(index) || index < 0 || index >= pokemon.length) {
        response.send(`Sorry, no pokemon found at ${request.params.indexOfArray}`);
    } else {
        const selectedPokemon = pokemon[index];
        response.send(selectedPokemon);
    }
  });
  
  

module.exports = app;