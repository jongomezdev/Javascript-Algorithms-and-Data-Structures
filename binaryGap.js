/** A binary gap within a positive integer N is any maximal 
 * sequence of consecutive zeros that is surrounded by 
 * ones at both ends in the binary representation of N.
 * For example, number 9 has binary representation 1001
 * and contains a binary gap of length 2. The number
 * 529 has binary representation 1000010001 and
 * contains two binary gaps: one of length 4
 * and one of length 3. The number 20 has
 * binary representation 10100 and contains one
 * binary gap of length 1. The number 15 has binary 
 * representation 1111 and has no binary gaps
 * The number 32 has binary representation 
 * 100000 and has no binary gaps.
 * 
 * Write a function:
 * 
 * function solution(N);
 * that, given a positive integer N, returns 
 * the length of its longest binary gap. 
 * The function should return 0 if N doesn't contain a binary gap.
 * 
 * For example, given N = 1041 the function should return 5, 
 * because N has binary representation 10000010001 and so 
 * its longest binary gap is of length 5. Given N = 32 the 
 * function should return 0, because N has binary representation 
 * '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647]. */

function solution(N) {
  var number = N;
  var binary = '';
  var counter = -1;
  var max = 0;
  while (number > 0) {
    var digit = number % 2;

    if (digit === 1) {
      if (counter > max) {
        max = counter;
      }
      counter = 0;
    } else if (counter >= 0) {
      counter++;
    }

    binary = '' + digit + binary;
    number = parseInt(number / 2);
  }

  //console.log('number, binary:', number, binary);

  return max;
}

const solution = (S) => {
  let string = S;
  let char = '';
  let counter = -1;
  let max = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === 'X') {
      if (counter > max) {
        max = counter;
      }
      counter = 0;
    } else if (counter >= 0) {
      counter++;
    }
    char = '' + i + char;
  }
  return max;
};

function solution(S) {
  var string = S;
  var consecutive = '';
  var counter = -1;
  var max = 0;
  while (string > 0) {
    var digit = number % 2;

    if (digit === 1) {
      if (counter > max) {
        max = counter;
      }
      counter = 0;
    } else if (counter >= 0) {
      counter++;
    }

    consecutive = '' + digit + binary;
    number = parseInt(number / 2);
  }

  //console.log('number, binary:', number, binary);

  return max;
}

function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

function solution(str) {
  let result,
    count = 1,
    i;

  if (!str) {
    return '';
  }

  result = str.charAt(0);
  for (i = 1; i < str.length; i++) {
    if (str.charAt(i) != str.charAt(i - 1)) {
      result += count + str.charAt(i);
      count = 1;
    } else {
      count++;
    }
  }

  return result + count;
}
