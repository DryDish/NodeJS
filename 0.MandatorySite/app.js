const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
const htmlFolder = __dirname + "/public/static/";

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.sendFile(htmlFolder + "home.html");
});

app.get("/session-one", (req, res) => {
  res.sendFile(htmlFolder + "session-one.html");
});

app.get("/session-two", (req, res) => {
  res.sendFile(htmlFolder + "session-two.html");
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

/*
 * To use a custom port run:
 * PORT=numberHere nodemon app.js
 * otherwise it defaults to 8080
 */
const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Server is running on port:", PORT);
});
