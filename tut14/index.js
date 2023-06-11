// CRUD with File System

// Topics -
// Make file
// Read file
// Update file
// Rename file
// Delete file
// Interview Question

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = dirPath + "/apple.txt";
const renamePath = dirPath + "/fruit.txt";

fs.writeFileSync(filePath, "This is a sample text file");

// fs.readFile(filePath, 'utf-8',(err, item) => {
//   console.log(item);
// });

// fs.appendFile(filePath, " and file name is apple.text", (err) => {
//     if (!err){
//         console.log("file is updated");
//     }
// });

// fs.rename(filePath, renamePath, (err) => {
//   if (!err) {
//     console.log("file is updated");
//   }
// });

// fs.unlinkSync(renamePath);

// buffer in nodejs - a temporary memory location required by nodejs to perform the operations
