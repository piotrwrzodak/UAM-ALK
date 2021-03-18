const alg1 = (n) => {
  let finalSet = [];
  if (n === 0) {
    finalSet.push([]);
    return finalSet;
  }
  let array = generateBinaryArrays(n);
  let auxiliaryArray;

  array.map((a) => {
    auxiliaryArray = [];
    a.filter((value, index) =>
      value === 1 ? auxiliaryArray.push(index + 1) : null
    );
    return finalSet.push(auxiliaryArray);
  });
  return finalSet;
};

const generateBinaryArrays = (n) => {
  let finalSet = [];
  let array = new Array(n).fill(0);
  finalSet.push(array);
  let even;
  let i;
  while (true) {
    i = n - 1;
    even = array.filter((x) => x === 1).length % 2 === 0 ? true : false;

    if (even) {
      array = replaceElement(array, i, array[i] === 1 ? 0 : 1);
    } else {
      while (array[i] === 0) {
        i--;
      }
      if (i === 0) break;

      array = replaceElement(array, i - 1, array[i - 1] === 1 ? 0 : 1);
    }
    finalSet.push(array);
  }

  return finalSet;
};

const replaceElement = (array, index, value) => {
  let temp = array.slice();
  temp.splice(index, 1, value);
  return temp;
};

export default alg1;
