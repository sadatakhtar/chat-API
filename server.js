const express = require("express");
const app = express();

const quotes = require("./quotes.json");

app.get('/', function(request, response) {
  response.send('/quotes/17 should return one quote, by id')
});

app.get("/quotes", function(request, response){
  response.json(quotes);
});

app.listen(process.env.PORT);

app.get('/quotes/:id', (req, res) => {
  const {id} = req.params
  const myQuotes = quotes.find(e => e.id == id);
  if(myQuotes){
    res.json(myQuotes);
    
  }else{
    res.send('not found!');
  }
})