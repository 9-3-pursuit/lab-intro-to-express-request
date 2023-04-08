const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Starting a new project");
});
