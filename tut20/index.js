// Render HTML and JSON

// Topics -
// How HTML tags
// Show json Data
// Link Pages
// Interview Question

const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send(`
  <h1>Welcome to Home Page</h1>
  <a href="/about">Go to About Page</a>
  |
  <a href="/help">Users JSON</a>
  `);
});

app.get("/about", (req, res) => {
  res.send(`
    <input type="text" placeholder="User name" value="${req.query.name}"/>
    <button>Click Me</button>
    <a href="/">Go to Home Page</a>
    `);
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Kishanlal",
      email: "kishanlal@test.com",
    },
    {
      name: "Sunay",
      email: "sunay@test.com",
    },
  ]);
});

app.listen(8000);

// Interview Question - How to get and display query params
