// Sample blog data
const { blogTitle, blogDate, blogDesc } = require("./json/blogs");
const express = require("express");
const dbUri = require("./resource/conn");

// Import mongoose
const mongoose = require("mongoose");

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
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", "files");

app.use((req, res, next) => {
  console.log("New request made");
  next();
});

app.use((req, res, next) => {
  console.log("New middleware after above");
  next();
});

// Route handlers

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

app.get("/blog", (req, res) => {
  // Passing an exported data from another module
  res.render("blog", { blogTitle, blogDate, blogDesc });
});

app.use((req, res) => {
  res.status(404).render("404");
});
