const alg4 = (n, r) => {
  console.log(n, r);
  n = parseInt(n);
  r = parseInt(r);

  let p = [];
  for (let i = 0; i < n - 2; i++) {
    let rem = r % n;
    p.push(rem);
    r = (r - rem) / n;
  }

  for (let i = 0; i < p.length; i++) {
    p[i]++;
  }
  return p.reverse();
};

export default alg4;
