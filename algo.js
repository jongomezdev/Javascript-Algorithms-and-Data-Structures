// ================================================
// Create a function that returns text
// to all uppercase letters
// ================================================

function sayLouder(text) {
  return text.toUpperCase();
}

console.log(sayLouder('It works'));
console.log(sayLouder('how are you?'));

// ================================================
// Filter an array
// ================================================

const grades = [10, 2, 21, 35, 50, -10, 0, 1];

// get all grades > 20
const result = grades.filter((grade) => grade > 20);
[21, 35, 50];

// get all grades > 30
grades.filter((grade) => grade > 30); // [35, 50]

//////////////////////////////////////////////////////

function getPositiveNumbers(numbers) {
  return numbers.filter((number) => number > 0);
}

console.log(getPositiveNumbers([10, -5, 2, -4]));

// ================================================
// Write a function that calculates the sum of all
// numbers from 1 up to (and including) some number n
// ================================================

// ================================================
// the slow way
// ================================================

function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

// ================================================
// the fast way
// ================================================

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

//test the amount of time it takes.
var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);

// ================================================
// Sort an array of numbers in numerical order
// ================================================

const arr = [9, 3, 6, 2, 8, 1, 0, 7, 5];

arr.sort((a, b) => a - b);

const arr = [
  { value: 2, weight: 8 },
  { value: 1, weight: 10 },
  { value: 5, weight: 2 },
  { value: 3, weight: 6 },
  { value: 4, weight: 4 },
];
arr.sort((a, b) => a.weight - b.weight);
// invert if you want highest to lowest.

//******* double([1, 2, 3]) prints --> [2, 4, 6] ** Makes new array*/
// for loop passes through the first array (user input)
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

// *************** Algorithms ****************

// ===============================================================
// Write a function which takes two numbers and returns their sum.
// ===============================================================

function add(x, y) {
  return x + y;
}
console.log(add(10, 12));

// ===============================================================
// VALIDATE A PALINDROME return TRUE or FALSE
// ===============================================================

function isPalindrome(str) {
  const revString = str.split('').reverse().join('');
  return revString === str;
}

var isPalindrome = function (s) {
  var sl = s.toLowerCase();
  var regex = /[^a-zA-Z0-9]/gi;
  var sreg = sl.replace(regex, '');
  return sreg === sreg.split('').reverse().join('');
};

// Easier to understand.

var isPalindrome = function (s) {
  const stripPunctuationAndLowerCase = (x) => {
    return x.replace(/[^0-9a-zA-Z]+/gim, '').toLowerCase();
  };

  let reversed = stripPunctuationAndLowerCase(s).split('').reverse().join('');

  if (reversed === stripPunctuationAndLowerCase(s.split(' ').join(''))) {
    return true;
  } else {
    return false;
  }
};

// Frequency Counter Pattern
// ===============================================================
// Write a function called "same", which accepts two arrays. The
// function should return true if every value in the array has it's
// corresponding value squared in the second array. The frequency
// of values must be the same.
// ===============================================================

// Time complexity - N^2 (quadratic relationship) because there's a forloop iterating as well as indexOf
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// Time complexity - O(n) (linear time)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  return true;
}

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

// ======================================================================
// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays
// ======================================================================

function arrayIntersection(arr1, arr2) {
  var result = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      arr1.shift();
    } else if (arr1[0] > arr2[0]) {
      arr2.shift();
    } else {
      //they are equal
      result.push(arr1.shift());
      arr2.shift();
    }
  }

  return result;
}

arrayIntersection([1, 2, 3, 4, 6], [4, 6, 7, 8]);

// =====================================================================================
// Write a for loop that looks at each index of the array to see if it matches the random value
// If it does match the random value display an alert box with the index of the array and the value
// =====================================================================================

var length = 14;

var stuff = [10, 34, 56, 67, 93, 120, 137, 168, 259, 280, 311, 342, 413, 514];
var random_value = stuff[Math.floor(Math.random() * 14)];

function linearSearch() {
  for (let i = 0; i < stuff.length; i += 1) {
    if (stuff[i] === random_value) {
      return stuff[i];
    }
  }
}
linearSearch();

function binarySearch(numbersArr, searchElement) {
  console.log('looking for x:', searchElement);
  var middleIndex = Math.floor(numbersArr.length / 2);
  // console.log(middleIndex);
  if (searchElement === numbersArr[middleIndex]) {
    return middleIndex;
  } else if (searchElement > numbersArr[middleIndex]) {
    numbersArr = numbersArr.slice(middleIndex + 1, numbersArr.length);
  }
}

var result = binarySearch(
  [1, 23, 43, 56, 77, 89, 211, 212, 789, 972, 1001, 4567, 4599, 83784],
  212
);
console.log(result);
