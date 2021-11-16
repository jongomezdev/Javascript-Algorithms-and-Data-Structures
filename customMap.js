/**
 * Higher order functions can be best described by the map, filter and reduce functions. Javascript by default has its own implementation of these functions. Today, we will be writing our own map, filter and reduce functions.

 */

let arr = [1, 2, 3, 4, 5];

const squareArr = arr.map((num) => num ** 2);

//console.table(squareArr); // prints [1,4,9,25]

/**
 * So what just happened? We wrote a function that returns the square of a number and passed that function as an argument to our map(). Let’s see step by step instructions on how to create our own map function.
 * 
 * 1. Create an empty array mapArr
 * 2. Loop through array elements.
 * 3. Call function mapFunc with the current element as the argument.
 * 4. Push the result of the mapFunc function to the mapArr array.
 * 5. Return the mapArr array after going through all the elements.

 */

function map(arr, mapFunc) {
  const mapArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = mapFunc(arr[i], i, arr);
    mapArr.push(result);
    console.log(arr[i]);
  }
  return mapArr;
}

const squareArr2 = map(arr, (num) => num ** 2);

//console.log(squareArr2); // prints [1, 4, 9, 16, 25]
