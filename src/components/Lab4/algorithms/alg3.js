const alg3 = (n, k, r) => {
  n = parseInt(n);
  k = parseInt(k);
  r = parseInt(r);

  if (binomial(n, k) > r && n > 0 && k > 0 && r > -1 && n >= k) {
    let array = [];

    let x = 1;
    for (let i = 0; i < k; i++) {
      while (binomial(n - x, k - i - 1) <= r) {
        r -= binomial(n - x, k - i - 1);
        x++;
      }
      array.push(x);
      x++;
    }

    return array;
  } else {
    return 'bad input';
  }
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
