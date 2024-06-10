// Middleware

// Topics :-
// What are Middlewares
// How to make a middleware
// Apply Middleware on routes
// Types of middleware
// Interview Question

const express = require("express");
const app = express();

// const reqFilter = (req, res, next) => {
//   console.log("reqFilter");
//   next();
// };

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age");
  } else if (req.query.age < 18) {
    res.send("You cannot access this page");
  } else {
    next();
  }
};

app.use(reqFilter);

app.get("", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/users", (req, res) => {
  res.send("Welcome to Users Page");
});

app.listen(8000);

// Middleware Types :-
// Application-level middleware
// Router-level middleware
// Error-handling middleware
// Built-in middleware
// Third-party middleware
