// Update Data in MongoDB

// Topics -
// Make New File for Update data
// Import MongoDB connection
// Delete single and multiple records
// Interview Questions

const dbConnect = require("./mongodb");

const updateData = async () => {
  //   console.log("Update Function");

  // Delete Single Data
  //   let db = await dbConnect();
  //   let result = await db.updateOne(
  //     { name: "M 30s" },
  //     { $set: { brand: "Apple" } }
  //   );

  // Delete Multiple Data
  let db = await dbConnect();
  let result = await db.updateMany(
    { name: "M 30s" },
    { $set: { brand: "Apple" } }
  );

  if (result.acknowledged) {
    console.log(result);
  }
};

updateData();

// Q1 - How to update a single record for multiple match - use updateOne() - it updates the first record it matches
