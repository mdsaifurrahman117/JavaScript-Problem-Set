let num1 = 20;
let num2 = 30;
let result;

if (num1 > num2) {
            result = num1 * 2;
} else {
            result = num1 + num2;
}

console.log(result);

// with ternary operator

result = num1 > num2 ? console.log(num1 * 2) : console.log(num1 + num2);
