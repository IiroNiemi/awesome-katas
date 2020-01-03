let fs = require("fs");

console.log(fs.readFileSync("./american-english-copy.txt").toString().split("\n"));