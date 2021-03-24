const express = require("express");
const app = express();

app.use(express.json());

const htmlFolder = __dirname + "/public/";

let id = 3;

let plants = [
  {
    id: 1,
    title: "Alnus glutinosa",
  },
  {
    id: 2,
    title: " Ilex verticillata",
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
  if (req.query.q === "spud") {
    return res.send({ type: "petite potato" });
  }
  return res.send({ type: "mature potato" });
});

app.get("/plants", (req, res) => {
  res.send(plants);
});

app.get("/plants/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const plant = listOfPlants.find((plant) => plant.id === id);
  if (plant === undefined) {
    res.status(404);
    res.send({ error: "Id was not found" });
  }
  res.send(plant);
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
  if (updated === true) {
    const plant = listOfPlants.find((plant) => plant.id === id);
    res.send(plant);
  } else {
    res.status(404);
    res.send({ error: "Id was not found" });
  }
});

app.delete("/plants/:id", (req, res) => {
  const deleteId = Number(req.params.id);
  // count total plants before deletion
  let plantsTotalBefore = plants.length;
  // replace plants lit with a list of all plants that do not have the received ID
  plants = plants.filter((plant) => plant.id != deleteId);
  // recount total plants
  let plantsTotalAfter = plants.length;

  // check if total plants has been reduced
  if ((plantsTotalBefore = plantsTotalAfter)) {
    res.status(404);
    res.send({ error: "Id was not found" });
  } else {
    res.send({ status: "success" });
  }
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
