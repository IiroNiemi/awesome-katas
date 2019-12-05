let fs = require("fs");
let stringNumbers = fs.readFileSync("./input.txt").toString().split(",");
let numbers = [];
let copyOfNumbers = stringNumbers.slice();

// Convert strings to numbers
stringNumbers.forEach(strNumber => {
  numbers.push(Number(strNumber));
});

/*
numbers[0] = 19690720;

if(numbers[0] === 19690720) {
  console.log('match: ' + numbers[0])
}
*/


for (let noun = 0; noun <= 100; noun++) {
  for (let verb = 0; verb <= 100; verb++) {
    numbers[1] = noun;
    numbers[2] = verb;
    for (let location = 0; location < numbers.length; location++) {
      // console.log("Inputting: "+numbers[1] +" "+numbers[2]); 
      console.log(numbers);
      
      //TODO: Find out why it doesn't calculate numbers to index [0]

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
     
      if(numbers[0] === 19690720){
       console.log('MATCH! ' + noun + " "+ verb) 
      }
      
    }
    numbers = copyOfNumbers.slice();
    
  }
}



console.log(numbers);
