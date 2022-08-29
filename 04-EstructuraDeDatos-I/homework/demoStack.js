function Stack() {
  this.arr = [];
}

Stack.prototype.add = function (elemento) {
  this.arr.push(elemento);
};

Stack.prototype.remove = function () {
  return this.arr.pop();
};

Stack.prototype.size = function () {
  return this.arr.length;
};

// add 👌
// remove 👌
// size

const miStack = new Stack();

console.log(miStack);
miStack.add(10);
console.log(miStack);
miStack.add(20);
console.log(miStack);
miStack.add(15);
console.log(miStack);
miStack.remove();
console.log(miStack);
console.log(miStack.size());

miStack.push();
miStack.shift();
