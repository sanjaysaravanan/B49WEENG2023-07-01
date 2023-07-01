// Q1 -> Sum of all the elements in the array
// Note: all the elements integer/Number
// INPUT
const userInput = ['1 2 3 4 5'];
// input = [1,2,3,4,5];

const input = userInput[0].split(' ');


// OUTPUT
// 15
let res = 0;

let i = 0;
while (i < input.length) {
  res = res + parseInt(input[i]);
  i++;
}

console.log(res);

// Q2 -> Search for a value in array
// if value is found return the index of the value in the array
// else return/print -1 
// Note: all the elements integer/Number

// input
// 99
// 11 22 33 44 55 66 77 88 99
// OP
// 8

// 999
// 11 22 33 44 55 66 77 88 99
// OP
// -1


const userInput = ['99', '99 11 22 33 44 55 66 77 88 99'];

// Getting input values
let x = userInput[0];

let inputArr = userInput[1].split(' ');

let i = 0; // specific to scopes

// flag to identifiy the presence for the all the iterations
let flag = false; // initially assume the x value is not present 

while (i < inputArr.length) {
  if (inputArr[i] === x) {

    // we found the element
    flag = true;

    break;
  }
  i++;
}

if (flag) {
  console.log(i); // found
} else {
  console.log(-1); // no found
}


// largest and smallest

// Smallest value
// INPUT
// 99 11 22 33 44 55 66 77 88 99

// OP
// 11
const userInput = ['99 11 22 33 44 55 66 77 88 99'];

// Getting input values
const inputArr = userInput[0].split(' ');

let min = 9999999; // assume initial value possible

let i = 0;

while (i < inputArr.length) {
  let val = parseInt(inputArr[i]);
  if (min > val) {
    min = val;
  }
  i++;
}

console.log(min);


// Largest value
// INPUT
// 99 11 22 33 44 55 66 77 88 99

// OP
// 11
const userInput = ['99 11 22 33 44 55 66 77 88 999'];

// Getting input values
const inputArr = userInput[0].split(' ');

let max = -999999; // assume initial value possible

let i = 0;

while (i < inputArr.length) {
  let val = parseInt(inputArr[i]);
  if (max < val) {
    max = val;
  }
  i++;
}

console.log(max);



// Loop inside Loop
// eg: sorting

// two iteration variable --> i(outer), j(inner)

// 
// n * n

let i = 1;
while (i <= 10) {
  let j = 1;
  while (j <= 10) {
    console.log('Line 136');
    console.log(' j=', j); // will execute 100 times
    j++;
  }
  i++;
}


// reverse an array

const userInput = ['99 11 22 33 44 55 66 77 88 999'];

const inputArr = userInput[0].split(' ');

// OUPUT
// 999 88 77 66 55 44 33 22 11 99

const arrLen = inputArr.length;

const reversedArr = [];

let i = arrLen - 1; // i value as index 9

let j = 0; // behind scenes computation

while (i >= 0) {

  reversedArr[j] = inputArr[i];

  j++;
  i--;
}

console.log(reversedArr);


