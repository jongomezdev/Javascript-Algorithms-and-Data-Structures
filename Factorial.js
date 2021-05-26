// 4 Factorial:
// 4!
// 4 * 3 * 2 * 1

// Non Recursive
function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}

// Recursive

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
