const express = require("express");
const app = express();

/**
 * Create a new server. That should contain routes that give you:
 *  The time
 *  The day
 *  The month
 */

/* Object format
const month = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};
*/

// Array Format
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log();

function currentDate() {
  return new Date();
}

function getDayString() {
  day = [
    "Sonday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return day[currentDate().getDay()];
}

app.get("/datetime", (req, res) => {
  res.send(currentDate());
});

app.get("/datetime/time", (req, res) => {
  res.send({
    hour: currentDate().getHours(),
    minute: currentDate().getMinutes(),
    second: currentDate().getSeconds(),
  });
});

app.get("/datetime/day", (req, res) => {
  res.send({ current_day: getDayString() });
});

app.get("/datetime/month", (req, res) => {
  res.send({ month: month[currentDate().getMonth()] });
});

app.get("/version", (req, res) => {
  res.send({version: "0.0.1" });
});

app.listen(8080);
