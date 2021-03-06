const alg2 = (n) => {
  var array = new Array(n).fill(1);
  var finalSet = [];
  finalSet.push(array);

  let i;
  let newValue;

  while (true) {
    i = n - 1;

    if (array[i] === i + 1 || array[i] === 9) {
      while (array[i] === i + 1 || array[i] === 9) {
        i--;
      }
      if (i < 0) break;
      array = replaceElement(array, i, array[i] + 1);
      i++;
      while (i < n) {
        array = replaceElement(array, i, 1);
        i++;
      }
    } else if (array[i] < i + 1) {
      newValue = array[i] + 1 < 9 ? array[i] + 1 : 9;
      array = replaceElement(array, i, newValue);
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

export default alg2;
