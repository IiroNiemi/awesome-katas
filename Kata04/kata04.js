let fs = require("fs");

let dirtyRows = fs.readFileSync("./weather.dat").toString().split("\n");
let TotalRowNumbers = dirtyRows.length;
let rows = dirtyRows.slice(2, TotalRowNumbers);

let lineWords = rows.map(rows=>{
  let arrayOfWords = rows.split("  ");

  let cleanWords = arrayOfWords.filter(word => {
    return word != ''
  });
  
  return cleanWords
})




console.log(lineWords);



