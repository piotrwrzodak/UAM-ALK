const alg2 = (p) => {
  let array = createArray(p);
  let finalArray = [];

  for (let i = 0; i < array[0]; i++) {
    finalArray.push(1);
  }
  for (let i = 1; i < array.length; i++) {
    for (let k = 0; k < array[i]; k++) {
      finalArray[k]++;
    }
  }
  return finalArray;
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

export default alg2;
