let finalArray = [];
let variables = { n: 1, k: 1 };

const alg3 = (n, k) => {
  finalArray = [];
  variables = { n, k };
  let array = [];

  recursionAlg(array, 0);

  return finalArray;
};

const recursionAlg = (array, i) => {
  if (i === variables.n) {
    finalArray.push(array);
  } else {
    for (let j = 0; j < variables.k; j++) {
      let auxiliaryArray = array.slice();
      auxiliaryArray.push(j + 1);
      recursionAlg(auxiliaryArray, i + 1);
    }
  }
};

export default alg3;
