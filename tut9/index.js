// As chalk new version cannot be imported using require so we will get error
// To solve this error we need to use the old version of chalk

const chalk = require("chalk");
console.log(chalk.blue("Hello World!")); 
console.log(chalk.bgRed.bold("Hello World!"));