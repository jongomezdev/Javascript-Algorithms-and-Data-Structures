function isPositive(a) {
  if (a > 0) return 'YES';
  throw Error(a ? 'Negative Error' : 'Zero Error');
}
