const alg3 = (p) => {
  let array = createArray(p);

  for (let i = 0; i < array.length; i++) {
    array[i]--;
  }

  let rank = 0;
  for (let i = 0; i < array.length; i++) {
    rank += array[array.length - i - 1] * (array.length + 2) ** i;
  }
  return rank;
};

const createArray = (input) => {
  let auxiliaryArray;
  if (input.includes(',')) {
    auxiliaryArray = input.split(',').map((value) => parseInt(value));
  } else {
    auxiliaryArray = [parseInt(input)];
  }
  return auxiliaryArray;
};

export default alg3;
