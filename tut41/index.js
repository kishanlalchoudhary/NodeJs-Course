// 41 - POST API With Mongoose

// Topics -
// Make config file for MongoDB
// Make Post Route
// Get data from the postman and save in DB

// 42 - GET, DELETE and PUT API

// Topics -
// Example of GET method API
// Example of DELETE method API
// Example of PUT method API

const express = require("express");

// Importing DB
require("./config");

// Importing Product Schema and Model
const Product = require("./product");

// Creating a express App
const app = express();

// using middleware to convert upcoming body data into JSON
app.use(express.json());

// post API
app.post("/create", async (req, res) => {
  let data = await Product(req.body);
  let result = await data.save();
  console.log(result);
  res.send(result);
});

// get API
app.get("/list", async (req, res) => {
  let data = await Product.find();
  res.send(data);
});

// delete API
app.delete("/delete/:_id", async (req, res) => {
  let data = await Product.deleteOne(req.params);
  res.send(data);
});

// put API
app.put("/update/:_id", async (req, res) => {
  let data = await Product.updateOne(req.params, { $set: req.body });
  res.send(data);
});

app.listen(5000);
