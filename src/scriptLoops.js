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


function Occurrence(str){
const occ = str.split("").reduce((acc,curr)=>{
if(acc.hasOwnProperty(curr)){
    acc[curr]= ++acc[curr];
}else{
    acc[curr]=1
}
return acc
},{})
return occ;
}

console.log(Occurrence("Banannna"));

function Retrieve(arr, n=1){

}

Retrieve([1,2,3,4,5])