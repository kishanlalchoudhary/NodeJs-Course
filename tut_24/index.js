// Dynamic Page

// Topics :-
// How to make Loop in ejs
// Make Header file
// show common header file
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
  const users = [
    {
      name: "Kishanlal Choudhary",
      email: "kishanlal@test.com",
      city: "Pune",
    },
    {
      name: "Sunay Bhoyar",
      email: "sunay@test.com",
      city: "Pune",
    },
    {
      name: "Abhishek Bhosale",
      email: "abhishek@test.com",
      city: "Pune",
    },
  ];
  res.render("profile", { users });
});

app.get("/login", (_, res) => {
  res.render("login");
});

app.listen(8000);
