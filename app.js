const express = require("express");

// Create the express app
const app = express();

// Now, listen for requests
// equivalent to createServer()
app.listen(3000);

// URL to listen to, and Callback that takes Request and Response object
app.get("/", (req, res) => {
  // Automatically sets header
  // Useful when sending raw texts
  // res.send("<p> HOMEEE </p>");

  // For sending  files
  // Requires the file path, and root directory
  res.sendFile("./files/index.html", { root: __dirname });
});

app.get("/login", (req, res) => {
  res.sendFile("./files/login.html", { root: __dirname });
});

// For redirections
app.get("/redirect", (req, res) => {
  // Automatically sets the status code
  res.redirect("/login");
});

// What about with error 404 pages
// Fires for every URL. It must be placed in the bottom to not overlap with other links
// If none of the get(URL) methods above is catched, this will execute
app.use((req, res) => {
  // Specify that this is an error by specifying its status  code
  res.status(404).sendFile("./files/404.html", { root: __dirname });
});
