const express = require("express");
const app = express();

app.get("/", (req, response) => {
  response.send("Welcome 99 Pokemon");
});

app.get("/:verb/:adjective/:noun", (req, res) => {
  const verb = req.params.verb;
  const adjective = req.params.adjective;
  const noun = req.params.noun;
  const message = `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`;
  res.send(message);
});

// Home page at `/bugs`
app.get("/bugs", (req, res) => {
  const message = "99 little bugs in the code";
  const link = '<a href="/bugs/101">pull one down, patch it around</a>';

  res.send(`${message} ${link}`);
});

app.get("/bugs/:numberOfBugs", function (req, res) {
  const numberOfBugs = parseInt(req.params.numberOfBugs);
  if (numberOfBugs > 200) {
    res.send(`There are too many bugs left to fix. <a href="/">Start over</a>`);
  } else {
    const remainingBugs = 99 - numberOfBugs;
    const nextLink = `<a href="/bugs/${
      numberOfBugs + 2
    }">pull one down, patch it around</a>`;
    res.send(`${remainingBugs} little bugs in the code ${nextLink}`);
  }
});

module.exports = app;
