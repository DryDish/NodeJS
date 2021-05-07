import express from "express";
const app = express();

// To give express some security */
import helmet from "helmet";
app.use(helmet());

//import sessionRouter from "./routes/session.mjs"
//app.use(sessionRouter());

import { anything } from "./routes/password.mjs";

const ipLogger = (req, res, next) => {
    console.log(req.ip);
    next();
};

app.get("/",ipLogger, (req, res, next) => {
    res.send("<h1> Welcome to Second </h1>");
});


app.get("/house/door", (req, res) => {
    res.send("<h1> You have come to the right place </h1>");
})

app.get("/house/*", (req, res) => {
    res.send("this house now features that");
})

app.listen(8080, (error) => {
    if (error){
        return error
    }
    console.log("Server is running on :", 8080);
});