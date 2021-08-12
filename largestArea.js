/**
 * A quality agent is responsible for inspecting samples of the finished products
 *  in the production line. Each sample contains defective and non-defective products
 *  represented by 1 and 0 respectively. After placing the product samples sequentially
 * in a two-dimensional square matrix of product samples, determine the size of the
 * largest square area of defective products.
 */

// input: samples=[[0,1,1],[1,1,0],[1,0,1]]
// output: 1

// input: samples=[[1,1,1],[1,1,0],[1,0,1]]
// output: 2

function largestArea(samples) {
  let maxLength = 0;

  for (let i = 0; i < samples.length; i++) {
    for (let j = 0; j < samples[i].length; j++) {
      if (samples[i][j] == 1) {
        if (i > 0 && j > 0) {
          samples[i][j] =
            Math.min(
              samples[i - 1][j],
              samples[i][j - 1],
              samples[i - 1][j - 1]
            ) + 1;
        }
        maxLength = Math.max(maxLength, samples[i][j]);
      }
    }
  }
  return maxLength;
}
