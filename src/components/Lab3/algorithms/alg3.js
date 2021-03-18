const alg3 = (n, r) => {
  if (r > 2 ** n - 1 || r < 0 || n < 1) return 'nieprawidłowe dane wejsciowe';
  let rankArray = createRankArray(n, r);
  let divRankArray = createDivRankArray(rankArray);
  let finalArray = calculateArrays(rankArray, divRankArray);
  let subset = decodeArray(finalArray);
  return subset;
};

const createRankArray = (n, r) => {
  let value = r;
  let array = [];
  for (let i = 0; i < n; i++) {
    if (value >= 2 ** (n - i - 1)) {
      array.push(1);
      value -= 2 ** (n - i - 1);
    } else {
      array.push(0);
    }
  }
  return array;
};

const createDivRankArray = (array) => {
  let auxiliaryArray = array.slice();
  auxiliaryArray.pop();
  auxiliaryArray.unshift(0);
  return auxiliaryArray;
};

const calculateArrays = (rankArray, divRankArray) => {
  let auxiliaryArray = [];
  for (let i = 0; i < rankArray.length; i++) {
    auxiliaryArray.push(rankArray[i] ^ divRankArray[i]);
  }
  return auxiliaryArray;
};

const decodeArray = (array) => {
  let auxiliaryArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      auxiliaryArray.push(i + 1);
    }
  }
  return auxiliaryArray;
};

export default alg3;
