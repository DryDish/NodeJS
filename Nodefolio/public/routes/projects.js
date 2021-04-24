const router = require("express").Router();

/*
{
    title: String,
    description: String,
    gitURL: String,
    images: String Array,
    technologiesInvolved: String Array,

}
*/
// Schema
const projects = [
  {
    title: "Nodefolio",
    description: "Personal portfolio with Node.js",
    gitURL: "https://github.com/IroniX2/NodeJS",
    images: [],
    technologiesInvolved: ["Node.js", "Html", "CSS"],
  },
];

router.get("/api/projects", (req, res) => {
    res.send({projects})
})

module.exports = {
  router: router,
};
