// Routing Params - Request and Response

// client always request and server always respond

const express = require("express");
const app = express();

app.get("", (req, res) => {
  console.log("data sent by browser ==>", req.query.name);
  if (req.query.name) {
    res.send("Welcome to the Home Page, " + req.query.name);
  } else {
    res.send("Welcome to the Home Page");
  }
});

app.listen(8000);
