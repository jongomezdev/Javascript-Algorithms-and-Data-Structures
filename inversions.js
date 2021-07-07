function getInvCount(arr, n) {
  let count = 0; // initialize result

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      if (arr[i] > arr[j]) {
        for (let k = j + 1; k < n; k++) {
          if (arr[j] > arr[k]) count++;
        }
      }
    }
  }
  return count;
}

function maxInversions(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j);
      if (arr[i] > arr[j]) count++;
    }
  }
  return count;
}
