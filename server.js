const express = require("express");
const app = express();

const quotes = require("./quotes.json");

app.get("/", function(request, response) {
  response.send("Quote Server.  Add new quotes via HTTP!");
});

app.get("/quotes", function(request, response){
  response.json(quotes);
});

app.listen(process.env.PORT);
