// Show file List

// Topics -
// Make files in a folder
// Use path module
// Get file names and print

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "files");
console.warn(dirPath);

// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(dirPath + "/hello" + i + ".txt", "a simple text file");
//   fs.writeFileSync(`${dirPath}/hello${i}.txt`, "a simple text file");
// }

fs.readdir(dirPath, (err, files) => {
  files.forEach((file) => {
    console.log("Filename is : " + file);
  });
});

// Nodejs creates a javascript run time environment therefore we can only access the folder inside the server. We cannot access the outside folders directly.
