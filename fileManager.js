const { log } = require("console");
const fs = require("fs");

const filename = "test.txt";

//Create--
fs.writeFileSync(filename,"Hello Node.js");
console.log("File created");

//Write--
const data = fs.readFileSync(filename,"utf8");
console.log("Reading file :" ,data);

//Update--
fs.appendFileSync(filename, "n\Learning fs modeule");
console.log("File-Updated");

//Delete--
fs.unlinkSync(filename);
console.log("File-Deleted");





