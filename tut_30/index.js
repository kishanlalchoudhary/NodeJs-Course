// Connect Node with MongoDB

// Topics -
// Install MongoDB Package
// Connect MongoDB with Node js
// Show data from mongoDB
// Interview Questions

// Two ways to import MongoClient
// const MongoClient = require("mongodb").MongoClient;
const { MongoClient } = require("mongodb");
// In connection string replace localhost by 0.0.0.0 so that you dont get any error
const url = "mongodb://0.0.0.0:27017";
const database = "e-comm";
// we need to pass the url to MongoClient so that MongoDB package can understand that we need fetch data from this url
const client = new MongoClient(url);

// function to show all the documents of a particular collection
async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection("products");
  let response = await collection.find({}).toArray();
  console.log(response);
}

getData();

// Q - Can we connect more than two database?
