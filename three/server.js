/*
Q.3_Create a Basic Server with Different Routes using Express
" `/`→ send response as {msg:`I am homepage`}
" `/about`\ → send response as {msg:`I am about page`}
" `/contact ` → send response as {email:`support@pwskills.com`}
*/
const express = require("express");

const app = express();

const PORT = 3000;
const HOSTNAME = "loacalhost";

app.get("/", (req, res) => {
  res.json({ msg: "I am homepage" });
});

app.get("/about", (req, res) => {
  res.json({ msg: "I am about Page" });
});

app.get("/contact", (req, res) => {
  res.json({ email: "supports@pwskills.com" });
});

app.listen(PORT, () => {
  console.log(`Server Running at ${HOSTNAME}:${PORT}`);
});
