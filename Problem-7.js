const ticketPrice = 800;
let isStudent = false;
let age = 18;

if (age < 10) {
            console.log("ticket free");
} else if (isStudent) {
            console.log("you are a student. you got 50% discount");
} else if (age >= 60) {
            console.log("you are a senior citizen. you got 15% discount");
} else {
            console.log("you pay full payment");
}