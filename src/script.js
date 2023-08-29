const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const arr3 = arr1.concat(arr2);

const Filter = arr3
  .filter((arr) => {
    if (arr > 5 && arr < 10) return arr;
    else return null;
  })
  .reduce((acc, curr) => {
    return acc + curr;
  },0);

console.log(Filter);
