let fs = require("fs");
let crypto = require('crypto');

let readLine = require('readline')
var rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let allWords = fs.readFileSync("./american-english-copy.txt").toString().split("\n")

// const allocBuf = Buffer.allocUnsafe(allWords.length * 32) // md5 hash is 32 digit long, lets allocate memory for those bytes.
const allocBuf = Buffer.alloc(allWords.length * 32, "0") // Manually initialize memory. (safe but slower)

let pointer = 0; // Points where next hash will be written.
allWords.forEach(word => {
  let hash = crypto.createHash("md5").update(word).digest("hex");

// console.log(word + " = " +hash)
// console.log(allocBuf.toString() + "\n")
  
  allocBuf.write(hash, pointer)
  pointer += hash.length;
});

console.log("Final output: ")
console.log(allocBuf.toString())

rl.question("Spell check: ", function(answer) {
  compareHash(answer);
  console.log("answer:", answer);

  rl.close();
});


function compareHash(answer){
  let answerHash = crypto.createHash("md5").update(answer).digest("hex");
  console.log("Answer hash: " + answerHash);
  // Keksi miten muodostettu hash-jono puretaan muistista fiksusti
  allocBuf.forEach(hash => {
    if(hash === answerHash){
      console.log("FOUND!");
    }
  
  });

}




