// Object Prototypes

console.log("///Object Prototypes and Array Loops");

const obj = {
  cart: 25,
  getCart: function () {
    console.log(`Total items in the cart is: ${this.cart}`);
  },
};

console.log(obj);
obj.getCart();
console.log(obj.toString());

function ReverseNum(num) {
  let rev = 0;
  do {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  } while (num > 0);
  return rev;
}

console.log(ReverseNum(1234));

function Occurrence(str) {
  const occ = str.split("").reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr)) {
      acc[curr] = ++acc[curr];
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  return occ;
}

console.log(Occurrence("Hahhhhahahhahha"));

function Retrieve(arr, n = 1) {
  if (n <= arr.length) {
    for (let i = n; i > 0; i--) {
      console.log(arr[i]);
    }
  } else {
    console.log(n + `  elements is not present `);
  }
}

Retrieve([1, 2, 3, 4, 5], 4);

function Frequent(arr) {
  const NewArr = arr.reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr)) {
      acc[curr] = ++acc[curr];
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  
  return NewArr;
}

console.log(Frequent([1, 2, 5, 4, 8, 9, 7, 5, 6, 4, 1, 2, 3, 5]));


let MainDiv =  document.getElementById('main');
console.log(MainDiv)

let NewDiv= document.createElement('div');
MainDiv.appendChild(NewDiv);
console.log(NewDiv)

let Input = document.getElementsByName('input');
console.log(Input)