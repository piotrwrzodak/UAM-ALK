const alg1 = (n, k, t) => {
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
  let auxiliaryArray = arr.slice();
  let i = k - 1;
  while (i > -1) {
    if (auxiliaryArray[i] === n - k + i + 1) {
      i--;
    } else {
      auxiliaryArray.splice(i, 1, auxiliaryArray[i] + 1);

      for (let j = i + 1; j < k; j++) {
        auxiliaryArray.splice(j, 1, auxiliaryArray[j - 1] + 1);
      }
      break;
    }
  }

  if (JSON.stringify(arr) === JSON.stringify(auxiliaryArray)) {
    return 'dany podzbiór nie ma następnika';
  } else {
    return auxiliaryArray;
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

export default alg1;
