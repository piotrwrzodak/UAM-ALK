const alg2 = (n, inputSubset) => {
  let array = [];

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

    let rankArray = [];
    let bit = 0;
    for (let i = 0; i < n; i++) {
      // ^ is XOR operator
      bit = bit ^ array[i];
      rankArray.push(bit);
    }

    return parseInt(rankArray.join(''), 2);
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
    if (parseInt(t[i]) > n || parseInt(t[i]) < 0) return true;
  }
  return false;
};

export default alg2;
