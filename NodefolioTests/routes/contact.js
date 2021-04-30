// crate a contact router that is set up with our server
// create a /contact route that will be used by our form
const router = require("express").Router();

// Schema
const contactInfo = [
  {
    name: "Alex Maccagnan",
    email: "alex@mail.real",
    subject: "Developer or something im not sure what you want here",
    input: "yes",
    button: "what",
  },
];
//<!-- Create a form that contains name, email, subject, input, button -->
// NODEMAILER
router.post("/api/contact", (req, res) => {
  console.log(req.body);
  res.redirect("/home");
  //res.send(contactInfo);
});

module.exports = {
  router: router,
};
