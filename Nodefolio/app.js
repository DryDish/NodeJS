const express = require("express");
const app = express();

const fs = require( "fs" );

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));



//const projectsRouter = require(__dirname + "public/routes/projects");
//const contactRouter = require(__dirname + "public/routes/contact");
const htmlFolder = __dirname + "/public/";


const contact = fs.readFileSync(__dirname + "/contact/contact.html", "utf-8");
//app.use(projectsRouter.router)
//app.use(contactRouter.router)
app.get("/contact", (req, res) => {
  res.send(contact);
})

app.get("/frontpage", (req, res) => {
    //res.send("Hello there, general potato");
    res.sendFile(htmlFolder + "frontpage/frontpage.html");
});

app.get("/api/projects", (req, res) => {
    //res.send("Hello there, general potato");
    res.sendFile(htmlFolder + "projects/projects.html");
});


const PORT = process.env.PORT || 8080;
console.log(PORT);

const server = app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Server is running on port:", server.address().port);
});
