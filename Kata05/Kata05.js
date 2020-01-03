let fs = require("fs");
let allWords = fs.readFileSync("./american-english-copy.txt").toString().split("\n")
const wordArray = new Uint16Array(10);

var crypto = require('crypto');
let hash = crypto.createHash("md5").update("A").digest("hex");


// https://nodejs.org/dist/latest-v6.x/docs/api/buffer.html#buffer_buf_tostring_encoding_start_end
const buf1 = Buffer.allocUnsafe()
let A = "A";

console.log(A.toString("ascii"))

/*
for (let i = 0; i < allWords.length; i++) {
    const word = allWords[i];
    wordArray[i] = crypto.createHash("md5").update(word).digest("hex");
    
}
*/








