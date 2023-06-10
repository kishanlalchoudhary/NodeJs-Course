// Read Data from MongoDB

// Topics -
// Read Data from MongoDB
// Make file for db connection
// Handle Promise
// Interview questions

// const { MongoClient } = require("mongodb");
// const url = "mongodb://0.0.0.0:27017";
// const database = "e-comm";
// const client = new MongoClient(url);

// async function dbConnect() {
//   let result = await client.connect();
//   let db = result.db(database);
//   return db.collection("products");
// }

const dbConnect = require("./mongodb");

// Handling Promise using .then
// dbConnect().then((res) => {
//   res
//     .find()
//     .toArray()
//     .then((data) => {
//       console.warn(data);
//     });
// });
// console.warn(dbConnect());

// Handling Promise using Asycnc and Await
const main = async () => {
  let data = await dbConnect();
  data = await data.find({ name: "Reno" }).toArray();
  console.warn(data);
};

main();
