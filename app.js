//Dependencies
const express = require("express");

//Configuration
const app = express();

//Routes
app.get("/", (req, res) => {
    res.send("Congratulations on starting a new project called")
})


// EXPORT
module.exports = app;