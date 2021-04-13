const alg3 = (n) => {
  let sum = 0;
  let bellArray = [];
  bellArray.push(1);
  for (let i = 1; i < n + 1; i++) {
    for (let k = 0; k < i; k++) {
      sum += binomial(i - 1, k) * bellArray[k];
    }
    bellArray.push(sum);
    sum = 0;
  }
  return bellArray[n];
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

export default alg3;
