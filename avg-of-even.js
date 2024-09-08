// function  takes an array as a parameter 
// give me the average of the even numbers array 
// put even numbers in an array

function even_avg (numbers) {
            // console.log(numbers);
            let evens = [];
            for (const number of numbers) {
                        // console.log(number);
                        if (number % 2 === 0) {
                                    // console.log(number);
                                    evens.push(number);
                        }
            }
            let sum = 0;
            for (const number of evens) {
                        sum = sum + number;
            }
            // console.log(sum);
            let length = evens.length;
            console.log("sum of even numbers array is", sum, "and length of numbers array is", length);
            let avg = sum / length;
            return avg;
}

let numbers = [12, 13, 10, 9, 44, 53, 90, 99, 89, 80, 57, 66];
let avg = even_avg (numbers);
console.log("average of even numbers is: ", avg);

