console.log("///JS DOM Manipulation");

let input = document.querySelectorAll(".inp");
console.log(input);

const Obj = {
  name: "avik",
  age: "25",
  getAge: function () {
    (() => console.log(this))();
  },
};

Obj.getAge();

let arr = [1, 2, 4, 5, 7, 8];

for (var i = 0; i < arr.length; i++) {
  (function (i) {
    setTimeout(() => {
      return console.log(arr[i]);
    }, 3000);
  })(i);
}
