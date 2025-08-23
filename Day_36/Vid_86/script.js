const fs = require("fs");

// Write file
fs.writeFileSync("example.txt", "Hello Node.js!");

// Read file
const data = fs.readFileSync("example.txt", "utf8");
console.log(data);
