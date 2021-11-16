// The reduce() method executes a reducer function (that you provide)
// on each member of the array resulting in a single output value.

let arr = [1, 2, 3, 4];

const sumReducer = (accumulator, currentValue) => accumulator + currentValue;

const sum = arr.reduce(sumReducer);

console.log('Reduce method: ', sum); // prints 10
