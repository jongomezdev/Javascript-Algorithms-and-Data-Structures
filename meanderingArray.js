function meanderingArray(unsorted) {
  let sorted = unsorted.sort((a, b) => b - a);
  let output = [];

  for (let i = 0; i < sorted.length / 2; i++) {
    output.push(sorted[i]);
    if (i !== sorted.length - 1 - i) {
      output.push(sorted[sorted.length - 1 - i]);
    }
  }
  return output;
}

// def meandering(k):
// k.sort()
// result = []
// i = 0
// j = len(k)-1
// while i <= j:
// if i == j:
// result.append(k[i])
// break
// result.append(k[j])
// result.append(k[i])
// i += 1
// j -= 1
// return result
