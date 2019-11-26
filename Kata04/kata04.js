let fs = require("fs");

let strg = fs.readFileSync("./weather.dat").toString().split("\n");

console.log(strg.length);

//console.log(strg[2].split("  "));



// console.log

