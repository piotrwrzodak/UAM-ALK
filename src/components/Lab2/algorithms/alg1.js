const alg1 = (n, inputSubset) => {
  let array = [];
  let rank = 0;

  let t = createArray(inputSubset);

  if (
    inputSubset === '' ||
    t.length > n ||
    doesArrayHaveDuplicates(t) ||
    doesArrayContainWrongValues(t, n)
  ) {
    return 'to nie jest podzbiór';
  } else {
    for (let i = 1; i <= n; i++) {
      if (t.indexOf(i) >= 0) {
        array.push(1);
      } else array.push(0);
    }

    for (let j = 0; j < array.length; j++) {
      if (array[j] === 1) {
        rank += 2 ** (array.length - j - 1);
      }
    }

    return rank;
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

const doesArrayHaveDuplicates = (array) => {
  return array.length !== new Set(array).size;
};

const doesArrayContainWrongValues = (t, n) => {
  for (let i = 0; i < t.length; i++) {
    if (parseInt(t[i]) > n) return true;
  }
  return false;
};

export default alg1;
