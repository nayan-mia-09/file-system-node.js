const fs = require("fs");

// File Read Synchronously 

const readFile = fs.readFileSync("file.txt", "utf8");
console.log(readFile);

console.log("File Read Synchronously.");