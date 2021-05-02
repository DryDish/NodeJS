const router = require("express").Router();
const mail = require("../public/contact/mail.js");


router.post("/api/contact", (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message

    
    mail.sendMail(name, email, subject, message);
    res.send({status: 200});
    //res.redirect("/");
});


module.exports = {
    router
};