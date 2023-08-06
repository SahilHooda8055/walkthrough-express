/*
Q.2 Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Express
" ‘/’ → send counter data as {counter:counter}
" `/increment` → increment counter by 1 and send in response latest data as {counter:counter}
" `/decrement` → decrement counter by 1 and send in response latest data as {counter:counter}
Note: Using Express is Mandatory for this Question.
*/
const express = require("express");

const app = express();

const PORT = 3009;
const HOSTNAME = "localhost";

let counter = 0;

app.get("/", (req, res) => {
  res.json({ counter: counter });
});

app.get("/increment", (req, res) => {
  res.json({ counter: ++counter });
});

app.get("/decrement", (req, res) => {
  res.json({ counter: --counter });
});

app.listen(PORT, () => {
  console.log(`Server Running at ${HOSTNAME}:${PORT}`);
});
