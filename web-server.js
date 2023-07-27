// Serve an HTML file to the client
const http = require("http");
const fs = require("fs");

const WEB_PATH = "./files/index.html";

const server = http.createServer((req, res) => {
  // Always set the header of the response
  res.setHeader("Content-type", "text/html");

  // Read the file
  fs.readFile(WEB_PATH, (err, data) => {
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
