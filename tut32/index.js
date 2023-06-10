// Insert Data from MongoDB

// Topics -
// Make New File for Insert Data
// Import MongoDB connection
// Insert single and multiple records
// Interview Questions

const dbConnect = require("./mongodb");

const insert = async () => {
  // Insert a single document or object
  // const db = await dbConnect();
  // const result = await db.insertOne({
  //   name: "i phone 13",
  //   brand: "Apple",
  //   price: 1000,
  //   category: "mobile",
  // });

  // Insert multiple documents or objects
  const db = await dbConnect();
  const result = await db.insertMany([
    {
      name: "i phone 11",
      brand: "Apple",
      price: 800,
      category: "mobile",
    },
    {
      name: "i phone 10",
      brand: "Apple",
      price: 600,
      category: "mobile",
    },
  ]);

  if (result.acknowledged) {
    console.log("data inserted");
  }
};

insert();

// Q1 - How to Insert multiple documents
