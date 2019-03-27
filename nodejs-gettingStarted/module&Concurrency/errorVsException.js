const path = require("path");
const fs = require("fs");

const files = ["oneFile", "twoFile", "NonExistedFile", "threeFile", "fourFile"];

// for loop, try first, and catch if there is error
files.forEach(file => {
  try {
    const filePath = path.resolve(process.env.Home, file);
    const data = fs.readFileSync(filePath);
    console.log("file data is", data);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("File not found");
    } else {
      throw err;
    }
  }
});
