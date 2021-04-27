const alg2 = (n, array) => {
  let newArray = createArrayFromString(array, n);
  if (!newArray) {
    return 'bad input';
  }

  // find the biggest value
  let biggestValue = 0;
  newArray.map((element) =>
    element > biggestValue ? (biggestValue = element) : null
  );

  // check if all values are present 1...biggestValue
  for (let k = 1; k <= biggestValue; k++) {
    if (!newArray.some((element) => element === k)) {
      return 'bad input';
    }
  }

  // prepare finalArray
  let finalArray = [];
  for (let i = 0; i < biggestValue; i++) {
    finalArray.push([]);
  }

  // fill finalArray
  for (let j = 0; j < n; j++) {
    finalArray[newArray[j] - 1]?.push(j + 1);
  }

  return finalArray;
};

const createArrayFromString = (array, n) => {
  let regexp = /[1-9]+[0-9]*/g;
  let auxArray = [];
  let checkSum = 0;
  let matchedElement;
  let number;

  while ((matchedElement = regexp.exec(array))) {
    number = parseInt(matchedElement[0]);
    if (number > n) {
      return false;
    }
    auxArray.push(number);
    checkSum++;
  }
  if (checkSum !== n) {
    return false;
  }
  return auxArray;
};

export default alg2;
