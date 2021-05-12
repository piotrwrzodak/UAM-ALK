const alg3 = (n) => {
  n = parseInt(n);
  let array = [];
  podział(n, array, n);
};

const podział = (n, array, b) => {
  if (n == 0) {
    console.log(array);
  } else {
    for (let i = 1; i <= Math.min(b, n); i++) {
      let newArray = array.slice();
      newArray.push(i);
      podział(n - i, newArray, i);
    }
  }
};

export default alg3;
