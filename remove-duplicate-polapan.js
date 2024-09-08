// biriyani party with chalak polapan

const biriyani_khor = ["abul", "kabul", "babul", "abdul", "hablu", "abul", "babul", "kabul", "dabul", "chabul", "keblu"];
// console.log(biriyani_khor);
// console.log(biriyani_khor.length);


function no_duplicate (polapan) {
            // return polapan;
            const new_polapan = [];
            for (const member of polapan) {
                        if (new_polapan.includes (member) === false) {
                                    new_polapan.push (member)
                        }
            }
            // console.log(new_polapan.length);
            return new_polapan;
}

let polapan = no_duplicate (biriyani_khor);
console.log(polapan);

// but the programmer can't let them go, he caught their chalaki

