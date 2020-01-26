
let crypto = require('crypto');
var Jimp = require("jimp");
let fs = require("fs");

let allWords = fs.readFileSync("./american-english-copy.txt").toString().split("\n")
let image = new Jimp(100, 100, 0x00000000, (err, image) => {
  // this image is 256 x 256, every pixel is set to 0xFF0000FF
});
let bitmapX = 0;
let bitmapY = 0;



writeHashToBitMap();
console.log(image)
let pixel = image.getPixelColor(0,0)

// miten pixelin luettu arvo pitäisi tulkita?
console.log(crypto.createHash("md5").update(pixel.toString()).digest());














Jimp.read(image).then(image => {
	return image
	.write("out.bmp")
});


// --- Helpers ---- //

// Ota kahdeksan ekaa merkkiä MD5 hashistä ja liitä alkuun 0x- hexamerkki
function writeHashToBitMap(){
	allWords.forEach(word => {
		let hash = createMd5Hash(word);
		let substring = hash.substring(0,8)
		let hexHash = "0x" + substring;
		console.log(hexHash);

		image.setPixelColor(parseInt(hexHash), bitmapX, bitmapY);
		bitmapX ++;
		if(bitmapX == 350) {
			bitmapX = 0
			bitmapY++;
		}
	});
}

// takes pixel value from bitmap (out.bmp)
function getHashFromBitMap(bitmapX, bitmapY){

}


function createMd5Hash(string){
	return crypto.createHash("md5").update(string).digest("hex");
}