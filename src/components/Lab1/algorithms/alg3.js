const alg3 = (n, k) => {
  var array = createArray(n);
  var finalSet = [];
  finalSet.push(array);
  let i;

  while (true) {
    i = n - 1;
    if (array[i] === k - n + i) {
      while (array[i] === k - n + i) {
        i--;
      }
      if (i < 0) break;
      array = replaceElement(array, i, array[i] + 1);
      i++;
      while (i < n) {
        array = replaceElement(array, i, array[i - 1] + 1);
        i++;
      }
    } else if (array[i] < k) {
      array = replaceElement(array, i, array[i] + 1);
    }
    finalSet.push(array);
  }

  return finalSet;
};

const createArray = (n) => {
  var foo = [];
  for (var i = 1; i <= n; i++) {
    foo.push(i);
  }
  return foo;
};

const replaceElement = (array, index, value) => {
  let temp = array.slice();
  temp.splice(index, 1, value);
  return temp;
};

export default alg3;
