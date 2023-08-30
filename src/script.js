const arr1 = [1, 2, 3, 4, 5,2];
const arr2 = [6, 7, 8, 9, 10,8,9];

const arr3 = arr1.concat(arr2);

// const arr3 = [...arr1, ...arr2];

const Filter = arr3
  .filter((arr) => {
    if (arr > 5 && arr < 10) return arr;
    else return null;
  })
  .reduce((acc, curr) => {
    return acc + curr;
  },0);

console.log(Filter);


function IdenticalRemove(ARR){
let ReducedArr = ARR.reduce(function(acc,currI){
  if(!acc.includes(currI) ){
        acc.push(currI);
  }
  return acc;
},[]);
return ReducedArr;
}
console.log(IdenticalRemove(arr3) , "<-IdenticalRemovingArr")
console.log(arr3)

function WhileLoop(newArr){
let sum = 0;
let i = 0;
while(newArr[i]>0){
sum+=newArr[i];
}
return sum
}
console.log(WhileLoop(arr3))
