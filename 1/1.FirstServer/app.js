const express = require("express");
const app = express();

// to solve the assingment create a datatype to store data in
// implement the two GET endpoints .. you can hardcode the ID for now

app.get("/", (req, res) => 
{
    res.send({ message: "this is my response"})
});

app.get("/new-one/id", (req, res) => 
{
    const id = 1;
    res.send({ "something": "That you can do"})
});

app.listen(8080);

/**
 * {
    "name": "peter",
    "lastname": "jensens"
}
 */