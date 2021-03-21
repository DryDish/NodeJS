const express = require("express");
const app = express();

app.use(express.json());

const htmlFolder = __dirname + "/public/";

let id = 3;

let plants = [
  {
    id: 1,
    title: "fire",
  },
  {
    id: 2,
    title: "ice",
  },
];

app.get("/", (req, res) => {
  res.sendFile(htmlFolder + "welcome.html");
});

app.get("/dragons", (req, res) => {
  res.sendFile(htmlFolder + "dragons.html");
});

app.get("/safeport", (req, res) => {
  res.send({ message: "you are safe here" });
});

app.get("/dangerport", (req, res) => {
  res.redirect("/safeport");
});

// Query string
app.get("/querystringhere", (req, res) => {
  console.log(req.query);
  if (req.query.q === "spud") 
  {
    return res.send({ type: "petite potato" });
  } 
  return res.send({ type: "mature potato" });
});

app.get("/plants", (req, res) => {
  res.send(plants);
});

app.post("/plants", (req, res) => {
  const newPlant = req.body;
  // add the id
  newPlant.id = id++;
  // send the data back
  res.send({ newPlant });
  // add to array:
  plants.push(newPlant);
});

app.patch("plants/:id", (req, res) => {
  let updated = false;
  plants = plants.map((plant) => {
    if (plant.id === Number(req.params.id)) {
      updated = true;
      return { ...plant, ...req.body, id: plant.id };
    }
    return plant;
  });

  res.send({ updated: updated });
});

app.delete("/plants/:id", (req, res) => {
  const delete_id = Number(req.params.id);

  plants = plants.filter((plant) => plant.id != id);

  res.send({});
});

app.use(express.static(__dirname + "/public")); 

const PORT = process.env.PORT || 8080;
console.log(PORT);
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Server is running on port:", PORT);
});
