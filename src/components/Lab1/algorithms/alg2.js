const alg2 = (n) => {
  var array = new Array(n).fill(1);
  var finalSet = [];
  finalSet.push(array);

  let i;
  while (true) {
    i = n - 1;
    if (array[i] < i + 1) {
      array = replaceElement(array, i, array[i] + 1);
    } else if (array[i] === i + 1) {
      while (array[i] === i + 1) {
        i--;
      }
      if (i < 0) break;
      array = replaceElement(array, i, array[i] + 1);
      i++;
      while (i < n) {
        array = replaceElement(array, i, 1);
        i++;
      }
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
