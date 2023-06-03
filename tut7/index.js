// http is a core moduel which handles servers requests and responses in Node Js
const http = require("http"); // Importing non global module

// const dataControl = (req, res) => {
//   res.write("<h1>Hello I am Kishanlal Choudhary<h1>");
//   res.end();
// };

// Creating a server
// http.createServer(dataControl).listen(4500); // create server is a function which takes functions as paramaters
http
  .createServer((req, res) => {
    res.write("<h1>Hello I am Kishanlal Choudhary<h1>");
    res.end();
  })
  .listen(4500); // create server is a function which takes functions as paramaters
