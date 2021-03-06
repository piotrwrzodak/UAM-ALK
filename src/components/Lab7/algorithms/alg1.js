const alg1 = (n, subsets) => {
  const array = parseArray(n, subsets);
  if (!array) {
    return 'bad input';
  }

  let rgfArray = [];
  for (let k = 0; k < n; k++) {
    rgfArray.push(0);
  }

  let i = 0;
  while (i < 9) {
    let index = i;
    if (rgfArray[index] === 0) {
      let subset = array.find((element) => {
        return element.includes(index + 1);
      });
      for (let j = 0; j < subset.length; j++) {
        rgfArray[subset[j] - 1] = index;
      }
    }
    i = i + 1;
  }
  return rgfArray;
};

const parseArray = (n, subsets) => {
  const regexp1 = /(\{([0-9]+,)*|([0-9]+)+\})+/g;
  const regexp2 = /[1-9]+[0-9]*/g;
  let matched;
  let number;
  let sumControl = 0;
  let controlDuplicatesArray = [];
  let finalArray = [];

  const auxArray = [...subsets.match(regexp1)];

  for (let i = 0; i < auxArray.length; i++) {
    finalArray.push([]);
    while ((matched = regexp2.exec(auxArray[i]))) {
      number = parseInt(matched);
      if (number > n) {
        return false;
      }
      finalArray[i].push(number);
      controlDuplicatesArray.push(number);
      sumControl++;
    }
  }
  if ((sumControl !== n) | doesArrayContainDuplicates(controlDuplicatesArray)) {
    return false;
  }
  return finalArray;
};

const doesArrayContainDuplicates = (array) => {
  return array.length !== new Set(array).size;
};

export default alg1;
