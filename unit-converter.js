// inch to feet ------------------------
// 12 inch = 1 feet 

function inch_to_feet(inch) {
            let feet = inch / 12;
            return feet;
}
let height = inch_to_feet (65);
console.log(height);

// second way
function inch_to_feet_2 (inch) {
            let feet_fraction = inch / 12;
            let feet_number = parseInt(feet_fraction);
            let inch_remaining = inch % 12;
            let result = feet_number + "ft " + inch_remaining + "inch";

            return result;
}
let height_2 = inch_to_feet_2(74);
console.log(height_2);

// feet to inch ------------------------
// 1 feet = 12 inch

function feet_to_inch(feet, inch) {
            let result = feet * 12 + inch;
            return result + " inch";
}
let height_3 = feet_to_inch (6, 2);
console.log(height_3);

// kilometer to miles ---------------------
// 1 km = 0.62137119 miles 

function km_to_miles(km) {
            let miles = km * 0.62137119;
            return miles + " miles";
}
let km = km_to_miles (10);
console.log(km);

// miles to kilometer --------------------
// 1 miles = 1.609344 km

function miles_to_km(miles) {
            let km = miles * 1.609344;
            return km;
}
let miles = miles_to_km (20);
console.log(miles);


// centimeter to inch ---------------------
// inch to centimeter ---------------------
// centimeter to millimeter ----------------
// millimeter to centimeter ----------------
// kilogram to gram ----------------------
// gram to kilogram ----------------------
// milligram to gram ---------------------
// gram to milligram ---------------------
// kilogram to pound ---------------------
// pound to kilogram ---------------------
// kilogram to milligram ------------------
// milligram to kilogram ------------------
// celsius to fahrenheit -------------------
// fahrenheit to celsius -------------------
