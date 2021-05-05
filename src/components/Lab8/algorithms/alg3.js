const alg3 = (n, r) => {
  n = parseInt(n);
  r = parseInt(r);

  if (fact(n) > r) {
    let array = createArray(n);

    array[n - 1] = 1;
    let d;
    for (let j = 0; j < n - 1; j++) {
      d = calculateD(r, j + 1);
      r -= d * fact(j + 1);
      array[n - j - 2] = d + 1;

      for (let k = n - j - 1; k < n; k++) {
        if (array[k] > d) {
          array[k]++;
        }
      }
    }
    return array;
  } else {
    return `to nie jest ranga ${n}-elementowej permutacji`;
  }
};

const calculateD = (r, j) => {
  let numerator, denominator;
  numerator = r % fact(j + 1);
  denominator = fact(j);

  return numerator / denominator;
};

const fact = (x) => {
  if (x === 0) return 1;
  return x * fact(x - 1);
};

const createArray = (n) => {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(undefined);
  }
  return array;
};

export default alg3;
