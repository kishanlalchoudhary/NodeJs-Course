// Delete Data in MongoDB

// Topics -
// Make New File for Delete data
// Import MongoDB connection
// Delete single and multiple records
// Interview Questions

const dbConnect = require("./mongodb");

const deleteData = async () => {
  // console.log("Delete Function");

  // Delete Single Data
  let db = await dbConnect();
  // let result = await db.deleteOne({ name: "Reno" });
  
  // Delete Multiple Data
  let result = await db.deleteMany({ brand: "Apple" });

  if (result.acknowledged) {
    console.log(result);
  }
};

deleteData();
