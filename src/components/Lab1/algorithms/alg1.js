const alg1 = (n, k) => {
  var array = new Array(n).fill(1);
  var a = new Array(n).fill(k);
  var finalSet = [];
  finalSet.push(array);
  let i;

  while (!array.every((value, index) => value === a[index])) {
    i = n - 1;
    if (array[i] < k) {
      array = replaceElement(array, i, array[i] + 1);
    } else if (array[i] === k) {
      while (array[i] === k) {
        i--;
      }
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

export default alg1;
