// The filter() method creates a new array with all elements that pass
// the test implemented by the provided function.

let arr = [1, 2, 3, 4, 5];

const oddArr = arr.filter((num) => num % 2 === 0);

//console.log("filter method", oddArr); // prints [2,4]

/*

The filter function took a function which will return true if a number is even. The filter() “filters” the input array based on whether the element is true or false. Let’s go through step by step on how the filter() works.

1. Create an empty array filterArr.
2. Loop through the array elements.
3. Call the filterFunc function with the current element as the argument.
4. If the result is true, push the element to the filterArr array.
5. Return filterArr array after going through all the elements.

**/

function filter(arr, filterFunc) {
  let filterArr = [];
  for (var i = 0; i < arr.length; i++) {
    const result = filterFunc(arr[i], i, arr);
    if (result) {
      filterArr.push(arr[i]);
    }
  }
  return filterArr;
}

const oddArr2 = filter(arr, (num) => num % 2 === 0);

console.log('Custom filter: ', oddArr2); // prints [2,4]
