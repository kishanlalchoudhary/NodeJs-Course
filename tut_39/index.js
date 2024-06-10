// 39 - Start with Mongoose

// Topics -
// What is Mongoose
// Difference between Mongoose vs Mongodb Package
// Install Mongoose
// What is schemas
// What is Model
// Connect NodeJs and MongoDB with Mongoose

// const mongoose = require("mongoose");

// const main = async () => {
//   await mongoose.connect("mongodb://0.0.0.0:27017/e-comm");
//   const ProductsSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//   });
//   const ProductsModel = mongoose.model("products", ProductsSchema);
//   let data = new ProductsModel({ name: "S22", price: 3000 });
//   let result = await data.save();
//   console.log(result);
// };

// main();

// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
// A Mongoose model is a wrapper of the Mongoose schema. A Mongoose schema defines the document's properties, default values, types of data, validators, etc. In contrast, a Mongoose model provides an interface for the database to create, query, update, delete records, and so on.

// 40 - CRUD with Mongoose
// Update Record
// Delete Record
// Find and Read Result

const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/e-comm");

const ProductsSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

const saveInDB = async () => {
  const ProductsModel = mongoose.model("products", ProductsSchema);
  let data = new ProductsModel({
    name: "S22",
    brand: "Samsung",
    price: 400,
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const Product = mongoose.model("products", ProductsSchema);
  let data = await Product.updateOne(
    { name: "S22" },
    { $set: { name: "S21" } }
  );
  console.log(data);
};

const deleteInDB = async () => {
  const Product = mongoose.model("products", ProductsSchema);
  let data = await Product.deleteOne({ name: "S21" });
  console.log(data);
};

const findInDB = async () => {
  const Product = mongoose.model("products", ProductsSchema);
  let data = await Product.find();
  console.log(data);
};

// saveInDB();
// updateInDB();
// deleteInDB();
// findInDB();
