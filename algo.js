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
// fizzBuzz
// ================================================

var output = [];

function fizzBuzz() {
  for (var count = 1; count <= 101; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push('FizzBuzz');
    } else if (count % 3 === 0) {
      output.push('Fizz');
    } else if (count % 5 === 0) {
      output.push('Buzz');
    } else {
      output.push(count);
    }
  }
  console.log(output);
}

// ================================================
// Not using a for loop
// ================================================

var output = [];
var count = 1;

function fizzBuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push('FizzBuzz');
    } else if (count % 3 === 0) {
      output.push('Fizz');
    } else if (count % 5 === 0) {
      output.push('Buzz');
    } else {
      output.push(count);
    }

    count++;
  }
  console.log(output);
}

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
// Fibonacci Sequence
// ================================================

function fibonacciGenerator(n) {
  var output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];

    for (var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }

  return output;
}

function fibonacci(num) {
  var a = 1,
    b = 0,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
}

// Recursive Fibonacci

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

// Memoization Fibonacci

function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
}

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

// 1. Can I restate the problem in my own words?
// "Add two numbers and return the value"
// 2. What are the inputs that go into the problem?
// - ints?
// - floats?
// - what about string for large numbers?
// 3. What are the outputs that should come from the solution to the problem?
// -int? -float? -string?
// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
// What if there is only one number?
// 5. How should I label the imnportant pieces of data that are a part of the problem?
//

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

// ===============================================================
// Write a function that takes in a string and returns counts of
// each character in the string.
// ===============================================================

//1. separate a string by the indexes. Count the amount of times each letter appears.

// Explore concret examples
// Are we accounting for spaces? Casing? Numbers? Letters that aren't there?
// charCount('aaaa') // {a:4}
// charCount('hello') // {h:1, e:1, l:2, o:1}

function charCount(str) {
  // make object to return at the end
  // loop over string for each character
  // if the char is a number/letter AND is key in object, add one to count
  // if the char is a number/letter AND is not in object, add it object and set value to 1
  // if char is something else (space, period, etc.) don't do anything
  // return object at end
}

function charCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i).toLowerCase();
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}
//============== refactored ====================

function charCount(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

// Frequency Counter Pattern
// ===============================================================
// Write a function called "same", which accepts two arrays. The
// function should return true if every value in the array has it's
// corresponding value squared in the second array. The frequency
// of values must be the same.
// ===============================================================

// Time complexity - N^2 (quadratic reltionship) because there's a forloop iterating as well as indexOf
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

// ===============================================================
// Given two strings, write a function to determine if the second
// string is an anagram of the first. An anagram is a word, phrase
// or name formed by rearranging the letters of another, such as:
// cinema, formed from iceman.
// ===============================================================

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

//                      MULTIPLE POINTERS
// Creating pointers or values that correspond to an index or position
// and move towards the beginning, end or middle based on a certain condition

// ===============================================================
// Write a function called sumZero which accepts a sorted array of
// integers. The function should find the first pair where the sum
// is 0. Return an array that includes both values that sum to zero
// or undefined if a pair does not exist.
// ===============================================================

// Time Complexity - O(N^2)
// Space Complexity - O(1)
// Brute force:
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// Time Complexity - O(N)
// Space Complexity - O(1)
// Refactor:
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// ===============================================================
// Implement a function called countUniqueValues, which accepts a
// sorted array, and counts the unique values in the array. There
// can be negative numbers in the array, but it will always be sorted.
// ===============================================================

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(i, j);
  }
  return i + 1;
}
countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]);

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

//=====================================================================================
// Write a function to take an array of integers and return the minimum
// number of increments required across the array to ensure that every number is unique
// =====================================================================================

// Understand the problem
// ex arr = [3,2,1,2,1,7]

// Break it down
// we need to iterate through the indexes of an array
// we need incrememnt each value to make the indexes unique
//

// return a minimum or maximum will usually need a counter

const minIncrement = (nums) => {
  var uniqueNums = {};
  var increments = 0;

  for (var i = 0; i < nums.length; i++) {
    while (uniqueNums[nums[i]] === true) {
      nums[i] += 1;
      increments++;
    }
    uniqueNums[nums[i]] = true;
  }
  return increments;
};

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
