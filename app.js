const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json")
console.log(pokemon.length)

//Welcome message 
app.get("/", (req, res)=> {
     res.send("Welcome 99 Pokemon");
 });


//New Project Name Generator
app.get("/:verb/:adjective/:noun", (req, res)=> {
   const  { verb, adjective, noun } = req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});

//99 Little Bugs In the Code
app.get("/bugs", (req, res)=> {
     res.send(`
     <h1>99 little bugs in the code</h1>
     <a href="http://localhost:8888/bugs/101">pull one down, patch it around</a>`);
 });

 app.get("/bugs/:numberOfBugs", (req, res) =>{
    const { numberOfBugs } = req.params;
    if(Number(numberOfBugs) >= 200){
     res.send(`
     <h1>Too many bugs!! Start over!</h1>
     <a href="http://localhost:8888/bugs">start over</a>`);
       } else {
        res.send(`
        <h1>${numberOfBugs} little bugs in the code</h1>
        <a href="${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>`);
       } 
 })

app.get("/bugs", (req, res)=> {
    res.send(`
    <h1>99 little bugs in the code</h1>
    <a href="http://localhost:8888/bugs/101">pull one down, patch it around</a>`);
});

//Poke-Express
app.get("/pokemon/search", (req, res) => {
    const { name } = req.query;
    const matchingPokemon = pokemon.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
    res.send(matchingPokemon);
  });


app.get("/pokemon/:indexOfArray", (req, res)=> {
    const {indexOfArray} = req.params;
    if(indexOfArray > 150){
        res.send(`Sorry, no pokemon found at ${indexOfArray}`);
    }else{
        res.send(pokemon[indexOfArray])
    }  
});



app.get("/pokemon", (req, res)=> {
    res.json(pokemon);
});


// Bonus 

app.get("/pokemon-pretty/", (req, res)=> {
    const html = pokemon.map((p, index) => 
        `<ul>
        <a href="http://localhost:8888/pokemon-pretty/${index}">${p.name}</a>
        </ul>`).join("");
    res.send(html);
})

app.get("/pokemon-pretty/:indexOfArray", (req, res)=> {
    const {indexOfArray} = req.params;
    if(indexOfArray > 150){
        res.send(`Sorry, no pokemon found at ${indexOfArray}`);
    }else{
        res.send(pokemon[indexOfArray])
    }  
});

module.exports = app;