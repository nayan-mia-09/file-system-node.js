const fs = require("fs");

// File Read Synchronously 

// const readFile = fs.readFileSync("file.txt", "utf8");
// console.log(readFile);

// console.log("File Read Synchronously.");

// File Read Asynchronously

// fs.readFile("file.txt" , "utf8" , (err, data) => {
//     if (err) throw err 
//     console.log(data);
// });

// console.log("File Read Asynchronously");

// File Write Synchronously 

// fs.writeFileSync("file1.txt" ,"Hello I'm from file-system.js !");
// console.log("File Write Successfully.");

// File Write Asynchronously

// fs.writeFile("file3.txt" , "New text file created using Asynchronously ." ,(err) => {
//     if (err) throw err
//     console.log("File write successfully.");
// });

// console.log("File Created Asynchronously.");

// Delete file synchronously 

// fs.unlinkSync("file1.txt");
// console.log("File Deleted.");

// File Deleted Asynchronously 

// fs.unlink("file3.txt", (err) => {
//     if (err) throw err
//     console.log("File deleted");
// });

// File Rename Synchronously

// fs.renameSync("file.txt", "mern.txt");
// console.log("File Renamed");

// File Rename Asynchronously 

fs.rename("mern.txt", "MERN-09", (err) => {
    if (err) throw err
    console.log("File Renamed");
});