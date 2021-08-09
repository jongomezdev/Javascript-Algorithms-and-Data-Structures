// ===============================================================
// Return a string in reverse.
// ===============================================================

// Clean code. easy to explain
function reverseString(str) {
  const strArr = str.split('');
  strArr.reverse();
  return strArr.join('');
}

// One liner.
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Using a decreasing forLoop
function reverseString(str) {
  let revString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    revString = revString + str[i];
  }
  return revString;
}

// Using an increasing forLoop
function reverseString(str) {
  let revString = '';
  for (let i = 0; i <= str.length - 1; i++) {
    revString = str[i] + revString;
  }
  return revString;
}

// Using forOf loop
function reverseString(str) {
  let revString = '';
  for (let char of str) {
    revString = char + revString;
  }
  return revString;
}

// For Each loop
function reverseString(str) {
  let revString = '';
  str.split('').forEach(function (char) {
    revString = char + revString;
  });
  return revString;
}

// For each ES6
function reverseString(str) {
  let revString = '';
  str.split('').forEach((char) => (revString = char + revString));
  return revString;
}

// Using REDUCE
function reverseString(str) {
  return str.split('').reduce(function (revString, char) {
    return char + revString;
  }, '');
}

// Using reduce and ES6
function reverseString(str) {
  return str.split('').reduce((revString, char) => char + revString, '');
}

var reverseString = function(s) {
  let i = 0, j = s.length - 1;
  while (i < j) {
      [s[i], s[j]] = [s[j], s[i]];
      i++;
      j--;
  }
  return s;
};