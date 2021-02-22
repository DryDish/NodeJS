const express = require("express");
const app = express();

// to solve the assingment create a datatype to store data in
// implement the two GET endpoints .. you can hardcode the ID for now

const users = [
    {id: 0, name: "Peter", occupation: "Cook"},
    {id: 1, name: "Andrea", occupation: "N/A"},
    {id: 2, name: "Dennis", occupation: "Student"}
] 


app.get("/user", (req, res) => 
{
    res.send({users})
});

app.get('/user/:id', (req, res) => 
{
    res.send(users[req.params.id])
});

app.listen(8080);
