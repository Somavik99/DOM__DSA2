// Object Prototypes

const obj  = {
    cart:25,
    getCart:function(){
        console.log(`Total items in the cart is: ${this.cart}`);
    }
}

console.log(obj)
obj.getCart();
console.log(obj.toString())