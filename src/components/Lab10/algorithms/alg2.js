const alg2 = (p) => {
  let arrayL = createArray(p);
  let arrayD = {};

  for (let i = 1; i < arrayL.length + 3; i++) {
    arrayD[i] = 1;
  }
  for (let i = 0; i < arrayL.length; i++) {
    arrayD[arrayL[i]]++;
  }

  arrayL.push(1);
  let pairs = [];

  for (let i = 0; i < arrayL.length; i++) {
    let x = undefined;
    let possibleNumber = Object.keys(arrayD).length;
    while (!x) {
      if (arrayD[possibleNumber] === 1) {
        x = possibleNumber;
      } else {
        possibleNumber--;
      }
    }
    pairs.push(`${x}`.concat(`${arrayL[i]}`));
    arrayD[x]--;
    arrayD[arrayL[i]]--;
  }
  return pairs;
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

export default alg2;
