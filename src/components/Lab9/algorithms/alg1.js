const alg1 = (n, k) => {
  let array = createArray(n, k);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= Math.min(i, k); j++) {
      if (i < 2 * j) {
        array[i][j] = array[i - 1][j - 1];
      } else {
        array[i][j] = array[i - 1][j - 1] + array[i - 1][j];
      }
    }
  }

  return array[n][k];
};

const createArray = (n, k) => {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push([]);
    for (let j = 0; j <= k; j++) {
      arr[i].push(0);
    }
  }
  arr[0][0] = 1;
  return arr;
};

export default alg1;
