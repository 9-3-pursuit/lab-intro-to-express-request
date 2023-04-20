const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome 99 Pokemon");
});

app.get("/bugs", (req, res) => {
  res.send(
    `<h1>99 little bugs in the code</h1>
    <span>99 little bugs in the code,</span>
    <span>99 little bugs,</span>
    <a href="/bugs/101">
        <span>pull one down,</span>
        <span>patch it around,</span>
    </a>
    <span>101 bugs in the code.</span>`
  );
});

app.get("/bugs/:numberOfBugs", (req, res) => {
  if (req.params.numberOfBugs <= 199) {
    res.send(
      `<h1>${req.params.numberOfBugs} little bugs in the code</h1>
                <span>${req.params.numberOfBugs} little bugs in the code,</span>
                <span>${req.params.numberOfBugs} little bugs,</span>
                <a href="/bugs/${parseInt(req.params.numberOfBugs) + 2}">
                    <span>pull one down,</span>
                    <span>patch it around,</span>
                </a>
                <span>${
                  parseInt(req.params.numberOfBugs) + 2
                } bugs in the code.</span>`
    );
  } else {
    res.send(`<h1>Too many bugs!! Start over!</h1>`);
  }
});
module.exports = app;
