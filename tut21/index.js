// Make Html Pages

// Topic :-
// Make folder for HTML file and access it
// Make HTML files
// Load HTML files
// Interview Question

const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));

app.listen(8000);
