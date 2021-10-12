function maximumOccurringCharacter(text) {
  // Write your code here
  let charMap = {};
  let maximumOccChar;
  let maxCount = 0;

  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  for (let key in charMap) {
    if (charMap[key] > maxCount) {
      maximumOccChar = key;
      maxCount = charMap[key];
    }
  }
  return maximumOccChar;
}
