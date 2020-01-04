let fs = require("fs");
var crypto = require('crypto');
let allWords = fs.readFileSync("./american-english-copy.txt").toString().split("\n")

const unSafeBuf = Buffer.allocUnsafe(allWords.length)
const allocBuf = Buffer.alloc(64, "0")
const fromBuf = Buffer.from("Hello world")

let pointer = 0;

allWords.forEach(word => {
  let hash = crypto.createHash("md5").update(word).digest("hex");
  console.log(hash)
  allocBuf.write(hash, pointer)
  pointer += hash.length;
});


console.log(allocBuf.toString())









