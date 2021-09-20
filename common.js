// Working with asynchronous functions//

// setTimeout() is an asynchronous function, meaning that the timer
// function will not pause execution of other functions in the
// call stack. In other words, you cannot use setTimeout() to create
// a"pause" before the next function in the function stack fires.

console.log('one');

setTimeout(() => {
  console.log('two');
}, 0);

console.log('3');

// Expected Output: one 3 two

// Call, Apply, Bind
var employee1 = { firstName: 'John', lastName: 'Rodson' };

function invite(greeting1, greeting2) {
  console.log(`${greeting1} ${this.firstName} ${this.lastName} ${greeting2}`);
}

// Call: The call() method invokes a function with a given this value and arguments provided one by one
// invite.call(employee1, 'Hello', 'How are you?'); // Output: Hello John Rodson How are you?

// Apply: Invokes the function with a given this value and allows you to pass in arguments as an array
// invite.apply(employee1, ['Hello', 'How are you?']); // Hello John Rodson, How are you?

// Bind: returns a new function, allowing you to pass any number of arguments
// var inviteEmployee1 = invite.bind(employee1);
// inviteEmployee1('Hello', 'How are you?'); // Hello John Rodson, How are you?

// Flatten Array

var arrays = [['$6'], ['$12'], ['$25'], ['$25'], ['$18'], ['$22'], ['$10']];

var merged = [].concat.apply([], arrays);

// Output: ['$6', '$12', '$25', '$25', '$18', '$22', '$10']
