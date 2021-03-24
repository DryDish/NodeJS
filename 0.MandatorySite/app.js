const express = require("express");
const app = express();

const htmlFolder = __dirname + "/public/static/";

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.sendFile(htmlFolder + "home.html");
});

app.get("/introduction", (req, res) => {
  res.sendFile(htmlFolder + "introduction.html");
});

app.get("/express", (req, res) => {
  res.sendFile(htmlFolder + "express.html");
});

app.get("/session-three", (req, res) => {
  res.sendFile(htmlFolder + "session-three.html");
});

app.get("/session-four", (req, res) => {
  res.sendFile(htmlFolder + "session-four.html");
});

app.get("/session-five", (req, res) => {
  res.sendFile(htmlFolder + "session-five.html");
});

app.get("/session-six", (req, res) => {
  res.sendFile(htmlFolder + "session-six.html");
});




// if not found will return 404, best to have it at the bottom
// so the html can still load without css
app.use(express.static(__dirname + "/public")); 


// To use a custom port run:
// PORT=numberHere nodemon app.js
// otherwise it defaults to 8080
// TODO -- OTHERS? 
const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Server is running on port:", PORT);
});
