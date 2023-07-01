// reverse string
// SANJAY-B49WEENG

// GNEEW94B-YAJNAS

// const userInput = ['SANJAY-B49WEENG'];
const userInput = ['MADAM'];

const inputStr = userInput[0];


let reveredStr = '';

let i = inputStr.length - 1;


while (i >= 0) {

  reveredStr = reveredStr + inputStr[i];

  i--;
}

console.log(reveredStr);


// PalineDrome --> revered string  === originla string

if (reveredStr === inputStr) {
  console.log("Palinedrome", true);
} else {
  console.log("Palinedrome", false);
}




