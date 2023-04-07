const express = require('express');
const app = express();
const pokemon = require('./models/pokemon');
console.log(pokemon[0]); 


app.get('/', (req, res) => {
    res.send("Welcome 99 Pokemon");
} ); 

app.get('/bugs', (req, res) => { 
    res.send(`<h1>99 little bugs in the code</h1><br> <a href="/bugs/101"> Pull one down, patch it around</a>`); 

} ); 

app.get('/bugs/:number_Of_Bugs', (req, res) => {    
    const NumOfBugs  = req.params.number_Of_Bugs;
    if (NumOfBugs < 200) {
        res.send(`${NumOfBugs} little bugs in the code <a href="/bugs/${Number(NumOfBugs) + 2}">Pull one down, patch it around</a>`);
   } else {
    res.send(`Too many bugs!! Start over! <a href="/bugs"> Click Here </a>`);
   }
});

app.get('/pokemon', (req, res) => { 
    res.json(pokemon);
} ); 


app.get('/pokemon/search', (req, res) => {
    const  name  = req.query.name;
    const pkmn = pokemon.filter(poke => poke.name === `${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`)
    if (pkmn) {
        res.send(pkmn)
    } else {
        res.send([])
    }
});

app.get('/pokemon/:indexOfArray', (req, res) => { 
    const index = req.params.indexOfArray
    if ( pokemon[index])
       {
         res.send(pokemon[index]);
       }
    else {
         res.send(`Sorry, no pokemon found at ${index}`)
    }   
} );


app.get('/:verb/:adjective/:noun', (req, res) => {
    const {verb,adjective,noun} = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
  
  })


module.exports = app;

