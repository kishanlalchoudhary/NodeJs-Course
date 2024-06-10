// Events and Event Emitter

// Topics -
// What is Events and Event Emitter
// Make an event and call it
// Interview Question
// What is REPL (Read - Eval - Print - Loop)

const express = require("express");
const EventEmitter = require("events");
const app = express();

const event = new EventEmitter();
event.on("countAPI", () => {
  count++;
  console.log("Event called : ", count);
});

let count = 0;

app.get("/", (req, res) => {
  res.send("api called");
  event.emit("countAPI");
});

app.get("/search", (req, res) => {
  res.send("search api called");
  event.emit("countAPI");
});

app.get("/update", (req, res) => {
  res.send("update api called");
  event.emit("countAPI");
});

app.listen(5000);
