// Sample blog data
const { blogTitle, blogDate, blogDesc } = require("./json/blogs");

const express = require("express");

// Create the express app
const app = express();

app.set("view engine", "ejs");
app.set("views", "files");

app.listen(3000);

// Middlewares are just pieces of codes that run in the backend that intercepts between
// incoming and outgoing HTTP objects
app.use((req, res, next) => {
  console.log("New request made");

  // Without next(), the backend will get stuck in this use() method. It will never reach the code
  // below, thus cannot handle requests that matches any of the get() methods below
  next();
});
app.use((req, res, next) => {
  console.log("New middleware after above");
  // That is why order is important when using use() functions
  next();
  // This lets the code proceed to the next code below
});

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
