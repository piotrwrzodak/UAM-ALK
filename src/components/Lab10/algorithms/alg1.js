const alg1 = (n, d) => {
  let array = createArray(d);
  let P = [],
    max,
    possibleMax,
    pair,
    occurences,
    newArray;

  for (let i = 0; i < n - 2; i++) {
    max = undefined;
    possibleMax = n;
    while (!max) {
      occurences = 0;
      for (let j = 0; j < array.length; j++) {
        if (array[j].includes(possibleMax)) {
          occurences++;
          pair = array[j];
        }
      }
      if (occurences === 1) {
        max = possibleMax;
        P.push(pair[0] == max ? pair[1] : pair[0]);
      } else {
        possibleMax--;
      }
    }
    newArray = array.filter((pair) => !pair.includes(max));
    array = newArray.slice();
  }
  return P;
};

const createArray = (input) => {
  let auxiliaryArray;
  if (input.includes(',')) {
    auxiliaryArray = input.split(',').map((value) => value);
  } else {
    auxiliaryArray = [input];
  }
  return auxiliaryArray;
};

export default alg1;
