// function takes an array as parameter 
// give me the average of the odd numbers in the array

// put odd numbers in an array 

function odd_avg (numbers) {
            // console.log(numbers);
            let odds = [];
            for (const number of numbers) {
                        // console.log(number);
                        if (number % 2 === 1) {
                                    // console.log(number);
                                    odds.push(number)
                        }
            }
            // odds is the array that contain only the odd numbers
            // console.log(odds);
            let sum = 0;
            for (const number of odds) {
                        sum = sum + number;
            }
            // console.log(sum);
            let length = odds.length;
            console.log("sum of odd numbers is ", sum, "and length of odd numbers array is", length);
            let avg = sum / length;
            return avg;
}

let numbers = [12, 3, 45, 44, 32, 77, 40, 80, 99, 105, 203, 11];
let avg = odd_avg (numbers);
console.log("average of odd numbers is: ", avg);
