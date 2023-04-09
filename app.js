const pokemon = require('./models/pokemon.json')
//dependencies
const express = require('express')

//configuration
const app = express()

app.get('/',(req,res)=>{
  res.send('Welcome 99 Pokemon')
})

app.get('/:verb/:adjective/:noun', (req, res) => {
  const {verb,adjective,noun} = req.params
  res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`)

})

app.get('/bugs',(req,res)=>{
  res.send(`<h1>99 little bugs in the code</h1><br> <a href="/bugs/101"> Pull one down, patch it around</a>`)
})


app.get('/bugs/:numberOfBugs',(req,res)=>{
  const param1  = req.params.numberOfBugs;
  if (param1 < 200) {
    
    res.send(`${req.params.numberOfBugs} little bugs in the code <a href="/bugs/${Number(req.params.numberOfBugs) + 2}">Pull one down, patch it around</a>`);
} else {
 res.send("Too many bugs!! Start over!");
}
})

app.get('/pokemon', (req,res)=>{
  res.send(pokemon)
})

app.get('/pokemon/search', (req, res) => {
  const  name  = req.query.name;
  const pkmn = pokemon.filter(poke => poke.name === `${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`)
  if (pkmn) {
      res.send(pkmn)
  } else {
      res.send([])
  }
});

app.get('/pokemon/:index',(req,res)=>{
  const {index} = req.params
  if(pokemon[index]){
    res.send(pokemon[index])
  }else{
    res.send(`Sorry, no pokemon found at ${index}`)
  }
})

module.exports = app;