// Template Engine

// Topics :-
// What is the template engine?
// Install ejs template package.
// Setup dynamic routing
// Make dynamic Page
// Interview Question

const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("", (_, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (_, res) => {
  const user1 = {
    name: "Kishanlal Choudhary",
    email: "kishanlal@test.com",
    city: "Pune",
  };
  const user2 = {
    name: "Sunay Bhoyar",
    email: "sunay@test.com",
    city: "Pune",
  };

  res.render("profile", { user1, user2 });
});

app.listen(8000);
