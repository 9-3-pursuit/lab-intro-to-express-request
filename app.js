// Dependencies
const express = require("express");
const pokemon = require("./models/pokemon.json");
//  console.log(pokemon[0]);

// Configuration
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

// Name Generator -> 3 parameters in the URL
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

//99 Little Bugs
app.get("/bugs", (req, res) => {
  res.send(
    `<h1>99 little bugs in the code</h1> 
    <a herf=/bugs/101> pull one down, patch it around<a>`
  );
});

// number of bugs -> both > 200 & > 200
app.get("/bugs/:numberOfBugs", (req, res) => {
  const { numberOfBugs } = req.params;
  if (numberOfBugs >= 200) {
    res.send("Too many bugs!! Start over!");
  } else {
    res.send(
      `<a href='/bugs/${
        +numberOfBugs + 2
      }'> Pull one down, patch it around </a> ${numberOfBugs} little bugs in the code`
    );
  }
});

// Poke-Express
app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

// pokemon search
app.get("/pokemon", (req, res) => {
  const { name } = req.query;

  for (let i = 0; i < pokemon.length; i++) {
    if (name.toLowerCase() === pokemon[i].name.toLowerCase()) {
      res.send([pokemon[i]]);
    } else {
      res.send([]);
    }
  }
});

// pokemon index
app.get("/pokemon/:index", (req, res) => {
  const { index } = req.params;
  if (pokemon[index]) res.send(pokemon[req.params.index]);
  else {
    res.send(`Sorry, no pokemon found at ${index}`);
  }
});

module.exports = app;
