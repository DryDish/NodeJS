const express = require("express");
const app = express();

app.use(express.json());

// Modify the URL so that you are sending today as the path variable and
// your name as the query string with the variable name "name"
// answer: localhost:8080/day/today?q=alex%maccagnan'

// create a rout called querystring that returns and empty json
// for now call it in your browser while giving it a query string

app.get("/querystring", (req, res) => {
  console.log(req.query);
  res.send({ query: req.query });
});

const cat = require("./cat.json")

console.log(cat);

app.get("/cat", (req, res) => {
  res.send(cat)
})

// give it the query string value: the best value
// and return it to the client

app.get("/pathvariable/:message", (req, res) => {
  console.log(req.params.message);
  res.send({ query: req.params.message });
});

// in the same route as above.. give it a title
// return the message with the title to the client
app.get("/title/:message/:other", (req, res) => {
  console.log((thing = req.params.message));
  console.log((other = req.params.other));
  res.send({
    query: thing,
    second: other,
  });
});

//post
app.post("/whatever", (req, res) => {
  // TODO - get what is in the body and send it back
  console.log(req.body);
  res.send({ name: req.body.name });
});

app.listen(8080, (error) => {
  if (error) 
  {
    console.log(error);
  }
  console.log("Server is running on 8080");
});
