const express = require("express");
const dbConnect = require("./mongodb");
const mongodb = require("mongodb");
const app = express();

// To convert incoming data into JSON
app.use(express.json());

app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  res.send(data);
});

app.post("/", async (req, res) => {
  console.log(req.body);
  let data = await dbConnect();
  let result = await data.insertMany(req.body);
  res.send(result);
});

app.put("/:id", async (req, res) => {
  console.log(req.body);
  let data = await dbConnect();
  let result = await data.updateOne(
    // Getting name using Query params
    { name: req.params.id },
    // { name: req.body.name },
    { $set: req.body }
  );
  res.send(result);
});

app.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  let data = await dbConnect();
  // let result = await data.deleteOne({ _id: req.params.id });
  // We cannot delete using id like this we need to make it object Id's instance
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send(result);
});

app.listen(5000);

// root url can be used for both get and post method, it will not contradict.
// Q1 - what you will use to get body from request - body parser (before 4.6 version of express) , express.json()
// Q2 - Can we update using post method? - Yes, but it is not recommended as it is not a standard
