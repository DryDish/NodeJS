const express = require('express');
const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
    console.log("socket connected", socket.id);

    socket.on("colorSelected", (data) => {
        console.log("data is:", data);
        //socket.emit("changeColor", data);
        io.emit("changeColor", data);
        //socket.broadcast.emit("changeColor", data);
    })
});


app.get("/", (reg, res) => {
    res.sendFile(__dirname + "/public/colors.html");
})



server.listen(8080, (error) => {
    if (error){
        console.log(error);
    }
    console.log("server is running on port:", 8080);
})