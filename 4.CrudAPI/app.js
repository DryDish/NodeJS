const express = require("express");
const app = express();

app.use(express.json());

class User {
  constructor(age, name, occupation) {
    this.id = 1
    this.age = age;
    this.name = name;
    this.occupation = occupation;
  }
}

const userAlex = new User(28, "Alex", "Student");
const userBob = new User(22, "Bob", "builder");
const userLuke = new User(26, "Luke", "Sky Walker");
const userBenjamin = new User(35, "Benjamin", "President");

const userList = [userAlex, userBob, userLuke, userBenjamin];

// -----------------------GET------------------------
app.get("/", (req, res) => {
  res.send({ userList });
});

app.get("/:id", (req, res) => {
  res.send(userList[req.params.id - 1]);
});

// ----------------------POST-------------------------
app.post("/", (req, res) => {
  const newUser = new User(req.body.age, req.body.name, req.body.occupation);
  console.log(newUser);
  userList.push(newUser);

  res.send({ newUser });
});

//------------------------PUT-------------------------
app.put("/:id", (req, res) => {
  const updateUser = new User(req.body.age, req.body.name, req.body.occupation);
  userList[req.params.id] = updateUser;
  console.log(userList);
  res.send({ reached: "success" });
});

//-----------------------DELETE------------------------
app.delete("/:id", (req, res) => {
  let length = userList.length;

  userList.splice(req.params.id, 1);
  console.log(userList);

  let status = "";
  if (userList.length >= length) {
    status = "fail";
  } else {
    status = "success";
  }
  res.send({ status: status });
});

//----------------------LISTENER------------------------
app.listen(8080);
