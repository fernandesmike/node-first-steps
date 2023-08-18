const express = require("express");
const dbUri = require("./resource/conn");

// Import mongoose
const mongoose = require("mongoose");
const blogRoute = require("./routes/blogRoute");

// Create the express app
const app = express();

// Connect to your db (async, promise)
mongoose
  .connect(dbUri)
  .then((res) => {
    // Only listen for requests when connection is established
    console.log("Connection success");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err.message);
    console.log(
      "Please make sure your IP address is whitelisted on Mongo DB Atlas"
    );
  });

// EJS
app.set("view engine", "ejs");
app.set("views", "files");
app.use(express.urlencoded({ extended: true }));

// Logger
app.use((req, res, next) => {
  console.log("New request made");
  next();
});

// Blog route
app.use(blogRoute);

// GET requests route handlers
app.get("/", (req, res) => {
  res.render("index", { heading: "My awesome title" });
});

app.get("/about", (req, res) => {
  res.render("about");
});

// Handler for create view
app.get("/account/create", (req, res) => {
  const paragObj = [
    { id: "1", content: "Lorem ipsum dolor sit amet consectetur" },
    { id: "2", content: "ipsum dolor consectetur" },
    { id: "3", content: "Lorem ipsum dolor sit amet " },
  ];
  res.render("create", { title: "My awesome self", paragObj });
});

app.use((req, res) => {
  res.status(404).render("404");
});
