// Remove extension from URL

// Topics :-
// Apply get method.
// Remove an extension from URL
// Make 404 page
// Apply 404 page
// Interview Question

const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.get("", (_, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/home", (_, res) => {
  res.sendFile(`${publicPath}/home.html`);
});

app.get("/aboutme", (_, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("*", (_, res) => {
  res.sendFile(`${publicPath}/nopage.html`);
});

app.listen(8000);
