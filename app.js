// DEPENDENCIES
const express = require("express");
const pokemon = require("./models/pokemon.json");

// CONFIGURATION
const app = express();
 

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");

});

// New Project Name Generator
app.get("/:verb/:adjective/:noun", (req, res) => {
  const { verb, adjective, noun } = req.params;
  res.send(
    `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
  );
});

// 99 Little Bugs In the Code
app.get("/bugs", (req, res) => {
    res.send(
      `<h1>99 little bugs in the code</h1> <a href="/bugs/101">pull one down, patch it around</a>`
    );
  });

  app.get("/bugs/:numberOfBugs", (req, res) => {
    let { numberOfBugs } = req.params;
    if (numberOfBugs < 200) {
        res.send(`<h1>${numberOfBugs} little bugs in the code</h1><a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around</a>`
      );
    } else {
        res.send(`<a href="/bugs">Too many bugs!! Start over!</a>`
      );
    }
  });

  // Poke-Express


app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.get("/pokemon/search", (req, res) => {
    const { name, type } = req.query;
    let searchCriteria = "";
    if (name) {
      searchCriteria = "name";
    } else if (type) {
      searchCriteria = "type";
    }
  
    function filterPokemon(search) {
      if (search === "name") {
        let pokeName = pokemon.filter((p) => {
          return p.name.toLowerCase() === name.toLowerCase();
        });
        return pokeName;
      } else if (search === "type") {
        let pokeType = pokemon.filter((p) => {
          return p.type
            .map((pokemonType) => pokemonType.toLowerCase())
            .includes(type.toLowerCase());
        });
        return pokeType;
      }
    }
  
    res.send(filterPokemon(searchCriteria));
  });

  app.get("/pokemon/:indexOfArray", (req, res) => {
    const { indexOfArray } = req.params;
    if (pokemon[indexOfArray]) {
      res.send(pokemon[indexOfArray]);
    } else {
      res.send(`Sorry, no pokemon found at ${indexOfArray}`);
    }
  });

  // BONUS

  //create new route and send unordered list of anchor tags that link to the array position of the pokemon
function renderPokemonList(pokemon) {
    let list = "<ul>"
   list = pokemon
      .map((poke, i) => {
        return `<li><a href="/pokemon-pretty/${i}">${poke.name}</a></li>`;
      }).join("");
 //styling the page 
    list += "</ul><style>body {background-color: green}</style>";
    return list;
    // console.log(list)
  }
  
  
  app.get("/pokemon-pretty", (req, res) => {
    res.send(renderPokemonList(pokemon));
  });
  //display the name, image and any other info of each individual poke
  function individualPokemon(individualPokemon) {
    const nameStr = `<h2>${individualPokemon.name}</h2>`;
    const imgStr = `<img src="${individualPokemon.img}" alt="${individualPokemon.name}"></img>`;
    return nameStr + imgStr;
  }
  
  app.get("/pokemon-pretty/:index", (req, res) => {
    const { index } = req.params;
    res.send(individualPokemon(pokemon[index]));
  });
  
  
  




  
//EXPORTS
module.exports = app;