let fs = require("fs");

let dirtyRows = fs.readFileSync("./weather.dat").toString().split("\n");
let TotalRowNumbers = dirtyRows.length;
let rows = dirtyRows.slice(2, TotalRowNumbers - 2);

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


let daySpread = {
  day: 0,
  spread: 100,
};

lineWords.forEach(word => {
  let day = word[0]
  let maxT = word[1].replace('*', '')
  let minT = word[2].replace('*', '')
  let spread = maxT - minT; 
  if(spread < daySpread.spread) {
    daySpread.spread = spread;
    daySpread.day = day;
  }
  // console.log("day: " + day + " Spread: " + daySpread)

});

console.log(daySpread);
