// Core Modules

// Topics -
// What are the core modules?
// What are global modules?
// Global Model example
// Non-global Module with Example

// console is a global module no need to import
console.log("Code Step by Step");

// fs is non global module need to import

// const fs = require("fs");
// fs.writeFileSync("helllo.txt", "Hello World!");

// fs.writeFileSync("helllo.txt", "Hello World!");
// const fs = require("fs");

// const fs = require("fs").writeFileSync;
// fs("helllo.txt", "Hello World!");

const gs = require("fs").writeFileSync;
gs("helllo.txt", "Hello World!");

console.log("-->", __dirname);
console.log("-->", __filename);
