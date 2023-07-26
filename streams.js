const fs = require("fs");

const NAMES_PATH = "./files/names.txt";

// Create and input stream bound to the specified path
const readStream = fs.createReadStream(NAMES_PATH);

// This is a listener on every data we read from the file
readStream.on("data", (chunk) => {
  console.log("\n\n\n\n\n---NEW CHUNK---");

  // Raw stream
  // console.log(chunk);

  console.log(chunk.toString());
});

// Create an output stream  bound to the specified path
const writeStream = fs.createWriteStream("./files/my-name.txt");

// Write the data
writeStream.write("AKO PO SI MIKE WEEW");

// Another topic - PIPE
