// File system module - create, modify, or read files
const fs = require("fs");

const NAMES_PATH = "./files/names.txt";

// Reading a file
// Two args == 1) Relative path to the file 2) Callback that triggers when reading is complete
// This method is async

// The callback function accepts error (if there's any) and the data in that file
fs.readFile(NAMES_PATH, (err, data) => {
  if (err) {
    console.log(err.message);
  }

  // By default, logging the data will return a Buffer
  // But with toString, it will convert the Buffer contents to String
  console.log(data.toString());
});

// Writing a file
// Three args == 1) Relative path to the file we want to write  2) What to write 3) Callback function

// This method will override the whole file with the target content
fs.writeFile(NAMES_PATH, "Mike Andrew Fernandez", () => {
  console.log("Successfully written to the file!");
});

// Write to a non - existing file
// This will work and will create the file for us
fs.writeFile("./files/my-name.txt", "Mike Andrew Fernandez", () => {
  console.log("Successfully written to the file!");
});
