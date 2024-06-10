// Search API in Node js with MongoDB

// Topics -
// Make Simple GET Route for API
// Search with Single field
// Test API

const express = require("express");
require("./config");
const Product = require("./product");
const app = express();

app.use(express.json());

app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  let data = await Product.find({
    $or: [
      { name: { $regex: req.params.key, $options: "i" } },
      { brand: { $regex: req.params.key, $options: "i" } },
      { category: { $regex: req.params.key, $options: "i" } },
    ],
  });
  res.send(data);
});

app.listen(5000);
