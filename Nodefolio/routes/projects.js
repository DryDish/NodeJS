const router = require("express").Router();

const projects = [
  {
    title: "Nodefolio",
    description: "Created a personal portfolio with Node.js",
    gitURL: "https://github.com/IroniX2/NodeJS/tree/main/Nodefolio",
    technologies: ["Node.js", "Html", "CSS"],
  },
  {
    title: "Another supercool project",
    description:
      "A project of great importance, and an equally important description",
    gitURL: "https://github.com/IroniX2/404",
    technologies: ["Java", "MySQL"],
  },
  {
    title: "Keyboard OS is Not Real!?",
    description: "Well at least we got a description that says something other than nothing",
    gitURL: "https://github.com/IroniX2/404",
    technologies: ["Probably some tech", "And some other tech"],
  },
];

router.get("/api/projects", (req, res) => {
  res.send({ projects });
});

module.exports = {
  router,
};
