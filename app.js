// Dependencies
const express = require("express");
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);

// Configuration
const app = express();

// Routes
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon 🪰");
});

// Name Generator -> 3 parameters in the URL
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun} !`
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
    res.send("Start over!");
  } else {
    res.send(
      `<a href='/bugs/${
        +numberOfBugs + 2
      }'> Pull one down, patch it around </a> ${numberOfBugs} little bugs in the code`
    );
  }
});
