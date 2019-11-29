let fs = require("fs");

let dirtyRows = fs.readFileSync("./weather.dat").toString().split("\n");
let TotalRowNumbers = dirtyRows.length;
let rows = dirtyRows.slice(2, TotalRowNumbers);
let lineWords = rows[0].split("  ");
let data = lineWords. // TODO; Clear white spaces from the lineWords

console.log(data);





// let thrdRow = strg[2].split("  ");
// console.log("Highest: " + thrdRow[2] +" Lowest: " + thrdRow[4] )





// console.log

