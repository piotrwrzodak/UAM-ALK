const alg2 = (n, p) => {
  n = parseInt(n);
  let array = createArray(p);
  let rank = 0;
  let first, second;

  if (
    array.length === n &&
    array.length === new Set(array).size &&
    !array.some((e) => e > array.length)
  ) {
    for (let j = 0; j < n; j++) {
      first = array[j] - 1;
      second = fact(n - j - 1);
      rank += first * second;
      for (let k = j + 1; k < array.length; k++) {
        if (array[k] > array[j]) {
          array[k]--;
        }
      }
    }
    return rank;
  } else {
    return 'złe dane wejsciowe';
  }
};

const createArray = (subset) => {
  let auxiliaryArray;
  if (subset.includes(',')) {
    auxiliaryArray = subset.split(',').map((value) => parseInt(value));
  } else {
    auxiliaryArray = [parseInt(subset)];
  }
  return auxiliaryArray;
};

const fact = (x) => {
  if (x === 0) return 1;
  return x * fact(x - 1);
};

export default alg2;
