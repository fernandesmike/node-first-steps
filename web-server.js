// Serve an HTML file to the client
const http = require("http");
const fs = require("fs");

const FILE_PATH = "./files/";

const server = http.createServer((req, res) => {
  // Always set the header of the response
  res.setHeader("Content-type", "text/html");

  let path = "";

  switch (req.url) {
    case "/":
      path = FILE_PATH.concat("index.html");
      break;

    case "/login":
      path = FILE_PATH.concat("login.html");
      break;

    // This is a redirection process
    case "/redirect":
      // Status code for redirection
      res.statusCode = 301;
      // Set the redirection site
      res.setHeader("Location", "/login");
      res.end();
      break;

    default:
      path = FILE_PATH.concat("404.html");
      break;
  }

  // Read the file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err.message);
      res.end();
    } else {
      // If no error occurred, send the file
      res.write(data);
      res.end();

      // Can also do this, when sending only one file and just emit the write() method
      // res.end(data);
    }
  });
});

server.listen(8000, "localhost", () => {
  console.log("Listening on Port 8000 Localhost");
});
