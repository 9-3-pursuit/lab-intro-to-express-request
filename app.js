const express = require('express');
const app = express();
const pokemon = require('./models/pokemon');
console.log(pokemon[0]); 


app.get('/bugs', (req, res) => { 
    res.send("99 little bugs in the code"); 
});

 
app.get('/bugs/:number_of_bugs', (req, res) => {    

     req.params.numberOfBugs
    if (req.params.number_of_bugs > 200) {
        res.send("Too many bugs!! Start over!");
    } else {
        res.send(`${req.params.number_of_bugs} little bugs in the code <a href="/bugs/${Number(req.params.number_of_bugs) + 2}">Pull one down, patch it around</a>`);
    }
}); 



app.get('/', (req, res) => {
    res.send("Welcome 99 Pokemon");
} ); 


app.get('/pokemon/:indexOfArray', (req, res) => { 
    res.send(pokemon[req.params.indexOfArray]); 
} );


app.get('/pokemon/search', (req, res) => {  
    res.json(pokemon.filter(poke => poke.name.toLowerCase() === req.query.name.toLowerCase())); 
} );

app.get('/pokemon', (req, res) => { 
    res.json(pokemon);
} ); 




module.exports = app;

