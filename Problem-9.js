let yourScore = 80; // score between 100
let friendsScore = 88; // score between 100

if (yourScore > 80) {
            console.log("your score more than 80 checking for friends score");
            if (friendsScore > 80) {
                        console.log("your friend also scored more than 80. go for a lunch");
            } else if (friendsScore <= 80 || friendsScore >= 60) {
                        console.log("your friend scored below 80 but 60 or above. good luck next time");
            } else if (friendsScore <= 60 || friendsScore >= 40) {
                        console.log("your friend scored below 60 but 40 or above. keep your friends message unseen");
            } else {
                        console.log("your friend scored less than 40. block your friends");
            }
} else {
            console.log("you got less than 80 or equal. go to home and sleep and act sad");
}