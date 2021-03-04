const express = require("express");
const app = express();

class Plant {
    constructor  (id, name, age){
        this.id = id
        this.name = name;
        this.age = age;
    }
}

first =  new Plant(1, "Planty", 12);
second =  new  Plant(2, "Plantone", 4);
third = new Plant(3,  "Plunt",  8);

listOfPlants = []
listOfPlants.push(first);
listOfPlants.push(second);
listOfPlants.push(third);


app.get("/plants", (req, res) => {
    res.send(listOfPlants);
})

app.get("/plants/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const plant = listOfPlants.find(plant => plant.id === id);
    if (plant === undefined)
    {
        res.status(404)
        res.send({error: "Id was not found"});
    }
    res.send(plant);
})


app.listen(8080, (error) => {
    if (error)
    {
        console.log(error);
    }
    console.log("Server is up and running!",  8080);
});
