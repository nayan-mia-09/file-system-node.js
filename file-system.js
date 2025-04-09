const fs = require("fs");

// File Read Synchronously 

// const readFile = fs.readFileSync("file.txt", "utf8");
// console.log(readFile);

// console.log("File Read Synchronously.");

// File Read Asynchronously

fs.readFile("file.txt" , "utf8" , (err, data) => {
    if (err) throw err 
    console.log(data);
});

console.log("File Read Asynchronously");