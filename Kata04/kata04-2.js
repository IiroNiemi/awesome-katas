let fs = require("fs");

let dirtyRows = fs.readFileSync("./football.dat").toString().split("\n");
let TotalRowNumbers = dirtyRows.length;
let rows = dirtyRows.slice(1, TotalRowNumbers - 5);

let lineWords = rows.map(rows=>{
  let arrayOfWords = rows.split("  ");

  let cleanWords = arrayOfWords.filter(word => {

    let clnWord = ""; 
    if(word != ''){
      clnWord = word;
    } 
    return clnWord
  });
  
  return cleanWords
})

console.log(lineWords);

let FAratio = {
  team: 0,
  spread: 100,
};

lineWords.forEach(word => {
	let spread;
	let team = word[0]
  let For = word[5]
	let Against = word[7]
	

	if(For > Against){
		spread = For - Against;
	} else if(Against > For){
		spread = Against - For;
	}

   
  if(spread < FAratio.spread) {
    FAratio.spread = spread;
    FAratio.team = team;
  }
});

console.log("Team: " + FAratio.team + " Spread: " + FAratio.spread)
