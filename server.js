// MUST REQUIRE this in order to work.
require("dotenv").config();

// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
const PORT = process.env.PORT;

// LISTEN
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
