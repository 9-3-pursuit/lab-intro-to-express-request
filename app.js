const express = require("express");
const cors = require("cors");
const pokemon = require("./models/pokemon.json");

const app = express();
app.use(cors());

function getPokemonByName(name) {
  return pokemon.find((p) => p.name.toLowerCase() === name.toLowerCase());
}

app.get("/pokemon/search", (req, res) => {
  const name = req.query.name;
  if (name) {
    const pokemon = getPokemonByName(name);
    if (pokemon) {
      res.send([pokemon]);
    } else {
      res.send([]);
    }
  }
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params;
    console.log(numberOfBugs)
    if ( Number(numberOfBugs) >= 200) {
      res.send(`
        <p>Too many bugs!! Start over!</p>
        <a href='/bugs'>Start over</a>
      `);
    } else {
      const nextNumberOfBugs = Number(numberOfBugs) + 2;
      res.send(`
      <p>${numberOfBugs} little bugs in the code</p>
      <a href="/bugs/${nextNumberOfBugs}">Pull one down, patch it around</a>
      `);
    }
});
      
    
  
  
  
  
  
  

  app.get("/bugs", (req, res) => {
    const { numberOfBugs } = req.params;
    const nextNumberOfBugs = numberOfBugs + 2;
    console.log(nextNumberOfBugs);
    res.send(`
    <h1>99 little bugs in the code</h1>
    <a href="/bugs/${nextNumberOfBugs}">Pull one down, patch it around</a>
    `);
  });
  

app.get("/pokemon-pretty/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (pokemon[indexOfArray] !== undefined) {
    res.send(`
          <h3>${pokemon[indexOfArray].name}</h3>
          <h4>${pokemon[indexOfArray].type}</h4>
          <img src="${pokemon[indexOfArray].img}" alt="${pokemon[indexOfArray].name}"></img>
          `
    );
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

app.get("/pokemon/:indexOfArray", (req, res) => {
  const { indexOfArray } = req.params;
  if (pokemon[indexOfArray]) {
    res.send(pokemon[indexOfArray]);
  } else {
    res.send(`Sorry, no pokemon found at ${indexOfArray}`);
  }
});

app.get("/pokemon-pretty", (req, res) => {
  const pokemonList = pokemon
    .map((p, index) => {
      return `
        <li>
          <a href="/pokemon-pretty/${index}">${p.name}</a>
        </li>
      `;
    })
    .join("");

  res.send(`
      <ul>
        ${pokemonList}
      </ul>
    `);
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

module.exports = app;
