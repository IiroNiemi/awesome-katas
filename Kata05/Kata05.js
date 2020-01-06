let fs = require("fs");
let crypto = require('crypto');
let pointer = 0; // Points where next hash will be written or read from the memory.
let allWords = fs.readFileSync("./american-english-copy.txt").toString().split("\n")
// const allocBuf = Buffer.allocUnsafe(allWords.length * 32) // md5 hash is 32 digit long, lets allocate memory for those bytes.
const allocBuf = Buffer.alloc(allWords.length * 32, "0") // Manually initialize memory. (safe but slower)
let readLine = require('readline')

// User input from console
var rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

writeHashToBuffer();

console.log("Read: ")
getHashesFromBuffer();

console.log("Final output: ")
console.log(allocBuf.toString())

rl.question("Spell check: ", function(answer) {
	isHashInBuffer(answer);
	console.log("answer:", answer);

	rl.close();
});



/* ---- Helpers ---- */

function writeHashToBuffer(){
	allWords.forEach(word => {
		let hash = createMd5Hash(word);
		allocBuf.write(hash, pointer)
		pointer += hash.length;
	});
}

function isHashInBuffer(answer){
	let answerHash = createMd5Hash(answer)


	console.log("Answer hash: " + answerHash);

}

function getHashesFromBuffer(){
	console.log(allocBuf.toString("utf8", 0, 32));
}

function createMd5Hash(string){
	return crypto.createHash("md5").update(string).digest("hex");
}


