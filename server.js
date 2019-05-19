const express = require("express");
const app = express();

const quotes = require("./quotes.json");

app.get('/', function(request, response) {
  response.send('Try /quotes/2 to get one by id')
});

app.get("/quotes", function(request, response){
  response.json(quotes);
});

app.listen(process.env.PORT);
