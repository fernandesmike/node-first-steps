// SERVER listens for events (requests) from a browser
// Server contains the website and listens for requests for that website
// It can be an image, audio, and HTML files

// SERVER and ClIENTS use HTTP as communication medium

// GET  - receive a resource from the server
// POST - send a data to the server

const http = require("http");

// Server needs a callback function
const server = http.createServer((req, res) => {
  // This log will onyl run on the server not in the browser console, because this code is running on the backend not on the frontend
  // req (Request object) - request send by the client through HTTP
  // res (Response object) - response sent by the server to the client who made the request
  // Both of this objects are essentially an IncomingMessage object by the HTTP module
  // --------------------
  // Sending something to the
  console.log("Sending response....");
  res.setHeader("Content-Type", "text/plain");
  res.write("Mike Andrew Fernandez");
  res.end();
});

// Listen on a port, with a hostname of localhost. Callback will be invoked when server started listening
server.listen(8000, "localhost", () => {
  console.log("Listening on Port 8000 Localhost");
});
