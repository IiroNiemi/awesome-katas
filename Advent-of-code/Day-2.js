let fs = require("fs");
let stringNumbers = fs.readFileSync("./input.txt").toString().split(",");
let numbers = [];

// Convert strings to numbers
stringNumbers.forEach(strNumber => {
  numbers.push(Number(strNumber));
});



for (let location = 0; location < numbers.length; location++) {
  if(location % 4 === 0){
    switch (numbers[location]) {
      case 1:
        let saveThis = numbers[numbers[location + 1]] + numbers[numbers[location + 2]]
        let savingPosition = numbers[location + 3]
        numbers[savingPosition] = saveThis;
      break;
      case 2:
        numbers[numbers[location + 3]] = numbers[numbers[location + 1]] * numbers[numbers[location + 2]];
      break;
      case 99:

      break;
  
      default:
        break;
    }
  }

}



console.log(numbers);
