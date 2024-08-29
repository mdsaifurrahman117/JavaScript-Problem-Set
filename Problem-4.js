var x = isNaN ("11");
console.log(x);
// x is false because "11" is a string representation of a number.

var y = isNaN (2-10);
console.log(y);
// y is false because 2 - 10 evaluates to -8, which is a valid number.