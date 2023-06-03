// Route Level Middleware

// Topics :-
// Route Level Middleware
// Apply Middleware on single Route
// Make middleware in different file
// Apply Middleware in the group of route
// Interview Question

const express = require("express");
const reqFilter = require("./middleware");
const router = express.Router();
const app = express();

// const reqFilter = (req, res, next) => {
//   if (!req.query.age) {
//     res.send("Please provide age");
//   } else if (req.query.age < 18) {
//     res.send("You cannot access this page");
//   } else {
//     next();
//   }
// };

// app.use(reqFilter);

router.use(reqFilter);

app.get("", (req, res) => {
  res.send("Welcome to Home Page");
});

// Middleware on single route
app.get("/users", reqFilter, (req, res) => {
  res.send("Welcome to Users Page");
});

router.get("/about", (req, res) => {
  res.send("Welcome to About Page");
});

router.get("/contact", (req, res) => {
  res.send("Welcome to Contact Page");
});

app.use("/", router);

app.listen(8000);
