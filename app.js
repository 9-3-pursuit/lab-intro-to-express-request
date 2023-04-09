const express = require("express");
const app = express();

app.get("/bugs", (request, response) => {
    response.send("<h1>99 little bugs in the code</h1><br><a href=localhost:8888/bugs/101>pull one down, patch it around</a>")
})

app.get("/bugs/101", (req,res) => {
    const {101} = req.params;
    res.send(`${101} little bugs in the code`)
})

app.get("/", (request, response) => {
    response.send("Welcome to express words app!")
})

app.get("/:verb/:adjective/:noun", (req,res) =>{
   const {verb, adjective, noun}= req.params;
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`);
});







module.exports = app;