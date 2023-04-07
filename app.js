const express = require('express');
const app = express();
    //console.log(app);
const pokemon = require('./models/pokemon');
    console.log(pokemon[0]);


            // Routes 
    //sends a welcome message
app.get("/",(req, res) => {
    res.send("Welcome 99 Pokemon");
});


    // 99 Little Bugs In the Code 
        // sends an h1 message
app.get("/bugs", (req, res) => {
        res.send(`<h1>99 little bugs in the code</h1><br> <a href="/bugs/101"> Pull one down, patch it around</a>`); 
});


    // sends an error link when too many bugs are requested 
    // sends a 'next' link when a small enough number of bugs is requested
app.get('/bugs/:number_Of_Bugs', (req, res) => {    
    //console.log(req.params.number_of_bugs)
    const bugNum  = req.params.number_Of_Bugs;
    if (bugNum < 200) {
        res.send(`${bugNum} little bugs in the code <a href="/bugs/${Number(bugNum) + 2}">Pull one down, patch it around</a>`);
   } else {
     res.send(`<a href="/bugs">Too many bugs!! Start over!</a>`);
   }
});

 
    // sends the list of Pokemon
app.get('/pokemon', (req, res) => { 
    res.json(pokemon);
});


    // sends an empty array when the Pokemon isn't found
    // sends the Pokemon when the name exactly matches
    // sends the Pokemon when the name matches ignoring case 
app.get('/pokemon/search', (req, res) => {
    const { name } = req.query;
    const pokemonName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    const pokemonFound = pokemon.filter(poke => poke.name === pokemonName)
    if (pokemonFound) {
        res.send(pokemonFound)
    } else {
        res.send([])
    }
});
   

    // sends a match when the index matches a Pokemon
    // sends a sorry message when no Pokemon is found at the index 
app.get('/pokemon/:indexOfArray', (req, res) => { 
    const index = req.params.indexOfArray
    if (pokemon[index]) {
        res.send(pokemon[index])
    } else {
        res.send(`Sorry, no pokemon found at ${index}`);
    }  
});


    // Simple Activity: New Project Name Generator
         // sends a congratulations adjective 
app.get('/:verb/:adjective/:noun', (req, res) => {
    const {verb, adjective, noun} = req.params
        res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)
});


            // Bonus 
app.get("/pokemon-pretty/", (req, res)=> {
    const html = pokemon.map((p, index) => 
        `<ul>
        <a href="http://localhost:8888/pokemon-pretty/${index}">${poke.name}</a>
        </ul>`).join("");
    res.send(html);
});


module.exports = app;
