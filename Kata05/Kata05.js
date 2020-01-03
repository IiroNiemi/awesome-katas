let fs = require("fs");
let words = fs.readFileSync("./american-english-copy.txt").toString().split("\n")

var crypto = require('crypto');
var hash = crypto.createHash("md5").update("value").digest("hex");

const bloomFilter = new Uint16Array(10);
bloomFilter[0] = 1;



console.log(hash)