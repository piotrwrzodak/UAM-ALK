const alg2 = (n, k, t) => {
  n = parseInt(n);
  k = parseInt(k);

  // subset verification
  let arr = createArray(t).sort((a, b) => a - b);
  if (
    t.replace(/\s/g, '') === '' ||
    doesArrayHaveDuplicates(arr) ||
    doesArrayContainWrongValues(arr, n) ||
    arr.length !== k
  ) {
    return 'dane T nie jest podzbiorem';
  }

  // algorithm
  let r = 0;
  arr.unshift(0);
  for (let i = 1; i <= k; i++) {
    if (arr[i - 1] + 1 <= arr[i] - 1) {
      for (let j = arr[i - 1] + 1; j <= arr[i] - 1; j++) {
        r += binomial(n - j, k - i);
      }
    }
  }
  return r;
};

const binomial = (a, b) => {
  let numerator = fact(a);
  let denominator = fact(a - b) * fact(b);
  return numerator / denominator;
};

const fact = (x) => {
  if (x === 0) return 1;
  return x * fact(x - 1);
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

const doesArrayHaveDuplicates = (array) => {
  return array.length !== new Set(array).size;
};

const doesArrayContainWrongValues = (t, n) => {
  for (let i = 0; i < t.length; i++) {
    if (parseInt(t[i]) > n || parseInt(t[i]) < 0) return true;
  }
  return false;
};

export default alg2;
