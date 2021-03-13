const alg2 = (n, r) => {
  let array = createArray(n, r);
  let finalArray = decodeArray(array);
  return finalArray;
};

const decodeArray = (array) => {
  let auxiliaryArray = [];
  array.filter((value, i) => (value === 1 ? auxiliaryArray.push(i + 1) : null));
  return auxiliaryArray;
};

const createArray = (n, r) => {
  let value = r;
  let array = [];
  for (let i = 0; i < n; i++) {
    if (value >= 2 ** (n - i - 1)) {
      array.push(1);
      value -= 2 ** (n - i - 1);
    } else {
      array.push(0);
    }
  }
  return array;
};

export default alg2;
