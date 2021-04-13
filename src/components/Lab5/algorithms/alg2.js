const alg2 = (n, k) => {
  if (k > n) {
    return 0;
  }

  let initalArray = createArray(n, k);
  let array = fillArrayWithInitialValues(initalArray);
  let finalArray = calculateValues(array, n, k);

  return finalArray;
};

const createArray = (n, k) => {
  let x = [];

  for (let i = 0; i < n + 1; i++) {
    x.push([]);
    for (let j = 0; j < k + 1; j++) {
      x[i].push(null);
    }
  }
  return x;
};

const fillArrayWithInitialValues = (array) => {
  array[0][0] = 1;
  for (let i = 1; i < array.length; i++) {
    array[i][0] = 0;
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i + 1 === j) {
        array[i][j] = 0;
      }
    }
  }
  return array;
};

const calculateValues = (array, n, k) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (array[i][j] === null) {
        array[i][j] = array[i - 1][j - 1] - (i - 1) * array[i - 1][j];
      }
      if (array[n][k] !== null) {
        return array[n][k];
      }
    }
  }
};

export default alg2;
