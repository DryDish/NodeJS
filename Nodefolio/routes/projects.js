const router = require("express").Router();

const projects = [
    {
        title: "Nodefolio",
        description: "Created a personal portfolio with Node.js",
        gitURL: "https://github.com/IroniX2/NodeJS/tree/main/Nodefolio",
        technologiesInvoled: ["Node.js", "Html", "CSS"]
    }
];

router.get("/api/projects", (req, res) => {
    res.send({ projects });
});


module.exports = {
    router
};
