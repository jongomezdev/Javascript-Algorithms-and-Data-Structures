/**
 * - In order to implement merge sort, it's useful to first implement
 * a function responsible for merging two sorted arrays
 * - Given two arrays which are sorted, this helper function should
 * create a new array which is also sorted, and consists of all of
 * the elements in the two input arrays
 * - This function should run in O(n + m) time and O(n + m) space
 * and should not modify the parameters passed to it.
 */

/**
 * MERGING ARRAYS PSEUDOCODE
 * - Create an empty array, take a look at the smallest values
 * in each input array.
 * - While there are still values we haven't looked at..
 * - If the value in the first array is smaller than the value
 * in the second array, push the value in the first array
 * into our results and move on to the next value in the first array.
 *
 */

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

merge([1, 10, 50], [2, 14, 99, 100]);

const products = [
  { id: 1, name: "product 1", liked: false },
  { id: 2, name: "product 2", liked: false },
  { id: 3, name: "product 3", liked: false },
  { id: 4, name: "product 4", liked: false },
  { id: 5, name: "product 5", liked: false },
];
const likedProducts = [
  { id: 1, name: "product 1", liked: true },
  { id: 2, name: "product 2", liked: true },
  { id: 3, name: "product 3", liked: true },
];

const index = new Map();

//index all products
for (let item of products) {
  index.set(item.id, item);
}

//overwrite anything that is liked
for (let likedItem of likedProducts) {
  if (index.has(likedItem.id)) {
    index.set(likedItem.id, likedItem);
  }
}

//construct a new array from the values
const result = Array.from(index.values());

console.log(result, "result");
