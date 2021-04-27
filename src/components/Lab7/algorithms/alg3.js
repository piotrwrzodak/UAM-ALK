const alg3 = (n) => {
  let rgfArray = [];
  let auxArray = [];
  let finalArray = [];
  for (let i = 0; i < n; i++) {
    rgfArray.push(1);
    auxArray.push(2);
  }
  finalArray.push(rgfArray);
  while (true) {
    rgfArray = rgfArray.slice();

    let k = 1;
    while (rgfArray[n - k] === auxArray[n - k]) {
      k++;
    }
    if (n - k === 0) break;
    finalArray.push(rgfArray);

    rgfArray[n - k] = rgfArray[n - k] + 1;
    let index = n - k + 1;
    while (index < n) {
      rgfArray[index] = 1;
      index++;
    }
    if (rgfArray[n - k] === auxArray[n - k]) {
      let index2 = n - k + 1;
      while (index2 < n) {
        auxArray[index2] = rgfArray[n - k] + 1;
        index2++;
      }
    } else {
      let index3 = n - k + 1;
      while (index3 < n) {
        auxArray[index3] = auxArray[n - k];
        index3++;
      }
    }
  }
  return finalArray;
};

export default alg3;
