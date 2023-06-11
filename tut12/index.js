// Input from command line

// Topics -
// Set input from command line
// Create file with input
// Delete the file with input

// node index.js 100 Kishanlal

// console.log(process.argv[2]);
// console.log(process.argv[3]);


// node index.js add apple.txt 'this is a fruit'
// node index.js add orange.txt 'this is color and fruit'
// node index.js add data.txt 'this is data, color and fruit'
// node index.js remove data.txt
// node index.js abc data.txt

const fs = require("fs");
const input = process.argv;

if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("Invalid input");
}
