function closestSumPair(arr1, arr2, target) {
  var arr1Sorted = arr1.sort((a, b) => a - b);
  var arr2Sorted = arr2.sort((a, b) => a - b);
  i = 0;
  j = arr2Sorted.length - 1;

  var smallestDiff = Number(Math.abs(arr1Sorted[0] + arr2Sorted[0] - target));
  var closestPair = (arr1Sorted[0], arr2Sorted[0]);

  while (i < arr1Sorted.length && j >= 0) {
    var v1 = arr1Sorted[i];
    var v2 = arr2Sorted[j];

    var currentDiff = v1 + v2 - target;
    if (Number(Math.abs(currentDiff)) < smallestDiff) {
      smallestDiff = Number(Math.abs(currentDiff));
      closestPair = (v1, v2);
    }
    if (currentDiff == 0) {
      return closestPair;
    } else if (currentDiff < 0) {
      i += 1;
    } else {
      j -= 1;
    }
    console.log(v1, v2);
  }
  return closestPair;
}

arr = [-1, 3, 8, 2, 9, 5];
