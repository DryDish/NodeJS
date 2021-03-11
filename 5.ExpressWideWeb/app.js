const express = require("express");
const app = express();

const htmlFolder = __dirname + "/public/";

app.get("/", (req, res) => {
    res.sendFile(htmlFolder + "welcome.html");
})

app.get("/dragons", (req, res) => {
    res.sendFile(htmlFolder + "dragons.html");
})

const PORT = process.env.PORT || 8080;
console.log(PORT)
app.listen(8080, (error) => 
{
    if (error)
    {
        console.log(error);
    }
    console.log("Server is running on port:", PORT);
});