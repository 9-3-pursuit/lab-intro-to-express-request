const express = require("express");
const app = express();

// app.get("/", (request, response) => {
//   response.send(
//     "Congratulations on starting a new project called jumping-joyous-jellybean!"
//   );
// });



// app.get("/:verb/:adjective/:noun", (request, response) => {
//   const { verb, adjective, noun } = request.params;
//   response.send(
//     `Congratulations on starting a new project called ${verb}-${adjective}-${noun}!`
//   );
// });

app.get("/", (request, response) => {
    const { message } = request.params;

    response.send("Welcome 99 Pokemon");
    });

app.get('/bugs/', (request, response) => {
    response.send("99 little bugs in the code!");
    });

    app.get('/bugs/link', (request, response) => {
    response.send('<a href= Too many bugs!!, Start over!>');
    });

// app.get('/bugs/:number_of_bugs', (request, response) => {
//     const { number_of_bugs } = request.params;
//     response.send(`${number_of_bugs} little bugs in the code!`);
//     });

app.listen(8888, () => {
//   console.log("I am listening for requests on port 3003!");
});

module.exports = app;
