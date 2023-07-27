// Sample blog data
const { blogTitle, blogDate, blogDesc } = require("./json/blogs");

const express = require("express");

// Create the express app
const app = express();

// Set some settings for the app
app.set("view engine", "ejs");
// By default, EJS will find a folder named "views" and find the files to be rendered in there
// But since, I am using a different folder name, this is how we set it
// ---------
// A view is just a dynamic HTML, in which content changes (non fixed HTML file)
app.set("views", "files");

// Now, listen for requests
// equivalent to createServer()
app.listen(3000);

app.get("/", (req, res) => {
  // Finds the specified views folder then locates the index file\
  // 2nd parameter is for the data that needs to be passed inside the HTML
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
