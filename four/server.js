/*
Q.4 Build a Server that Generates Random Number Using Express
 ‘/random’ → send random number in response {random:10}
*/
const express = require("express");

const app = express();

const HOSTNAME = "localhost";
const PORT = 3006;

app.get("/random", (req, res) => {
  let random = Math.floor(Math.random() * 10);
  res.send({ random: random });
});

app.listen(PORT, () => {
  console.log(`Server Running at ${HOSTNAME}:${PORT}`);
});
