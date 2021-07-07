function numOfIds(pool) {
  let totalCount = 0;
  for (var i = 0; i < pool.length; i += 8) {
    if (pool.substring(i, 7).includes('8')) {
      totalCount++;
    }
  }
  return totalCount;
}
