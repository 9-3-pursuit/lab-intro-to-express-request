const express = require("express");
const app = express();
const pokemon = require("./models/pokemon.json")
console.log(pokemon[0])

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
app.get("/pokemon", (req, res)=> {
    res.json(pokemon);
});

app.get("/pokemon/:indexOfArray", (req, res)=> {
    res.json(pokemon);
});


module.exports = app;