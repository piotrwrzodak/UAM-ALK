const alg1 = (n, p) => {
  let array = createArray(p);
  if (array.length === parseInt(n) && array.length === new Set(array).size) {
    let x, y;
    for (let i = array.length - 2; i > -1; i--) {
      if (array[i] < array[i + 1]) {
        x = i;
        break;
      }
    }
    for (let i = array.length - 1; i > -1; i--) {
      if (array[i] > array[x]) {
        y = i;
        break;
      }
    }

    if (x && y) {
      let temp = array[x];
      array[x] = array[y];
      array[y] = temp;

      let auxiliaryArray = [];
      while (array.length > x + 1) {
        auxiliaryArray.push(array.pop());
      }

      let finalArray = array.concat(auxiliaryArray);

      return finalArray;
    } else {
      return 'brak nastepnika';
    }
  } else {
    return 'złe dane wejsciowe';
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

export default alg1;
