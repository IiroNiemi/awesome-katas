let fs = require("fs");
var crypto = require('crypto');
let allWords = fs.readFileSync("./american-english-copy.txt").toString().split("\n")


const allocBuf = Buffer.alloc(64, "0")

let pointer = 0;

allWords.forEach(word => {
  let hash = crypto.createHash("md5").update(word).digest("hex");

  console.log(word + " = " +hash)
  console.log(allocBuf.toString() + "\n")
  
  allocBuf.write(hash, pointer)
  pointer += hash.length;
});

console.log("Final output: ")
console.log(allocBuf.toString())









