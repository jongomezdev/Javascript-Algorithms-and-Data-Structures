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

function fizzBuzz(num) {
  while (count <= num.length) {
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
