// leap year or not - simple logic
// year will be leap year if the year is divisible by 4

function is_leap_year (year) {
            if (year % 4 === 0) {
                        return true;
            } else {
                        return false;
            }
}
let leap_year = is_leap_year (2044);
// console.log(leap_year);

// those year that is not divisible by 100, if the year is divisible by 4 then it will be a leap year
// those year that is divisible by 100 and 400 it will be a leap year

function is_leap_year_2 (year) {
            if (year % 100 !== 0 && year % 4 === 0) {
                        return true;
            } else if (year % 100 === 0 && 400 === 0) {
                        return true;
            } else {
                        return false;
            }
}
let leap_2 = is_leap_year_2 (2120);
console.log(leap_2);
