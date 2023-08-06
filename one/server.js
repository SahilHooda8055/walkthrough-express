/*
Q.1 Build a Server Using Http Module NodejS with api endpoints for Getting Products Data
"/"" → send msg as “Welcome to Men & Women Dummy Data”
"/men" → send 10 products data of men
"/women" → send 10 products data of women;
"/other" → send response as page not found
*/
const http = require("http");
const menProductData = require("./men'sProductData");
const womenProductData = require("./women'sProductData");

const PORT = 3000;
const HOSTNAME = "localhost";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Welcome to Men & Women Dummy Data");
  } else if (req.url == "/men") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(menProductData));
  } else if (req.url == "/women") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(womenProductData));
  } else {
    res.end("Page Not Found!");
  }
});

server.listen(PORT, () => {
  console.log(`Server Running at ${HOSTNAME}:${PORT}`);
});
