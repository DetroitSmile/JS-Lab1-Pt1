"use strict";

    let intro = prompt("Dare to challenge the Almighty Grant?");

if (intro === "yes" || intro === "Yes") {
    let userName = prompt("Whats your name, human?");
    let wins = 0;
    let grantHp = 10;
    let userHp = 40;

    console.log(`Let's get it crackin! ${userName}'s starting health is ${userHp} and the Almighty Grant's health is ${grantHp}!`);
    while (grantHp > 0) {
        console.log(`${userName} health: ${userHp -= Math.floor((Math.random()* 2) + 1)}`);
        console.log(`Almighty Grant's health: ${grantHp -= Math.floor((Math.random()* 2) +1)}`);
        if (wins >= 3 && grantHp <= 0) {
            console.log(`"Winner winner ${userName}! You've defeated the Almighty Grant!"`);
            break;
        } else if (userHp <= 0) {
            console.log("Better luck next time..Almighty Grant wins!");
            break;
        } else if (grantHp <= 0) {
            wins++;
            console.log(`${userName} wins: ${wins}`);
            grantHp = 10;
        }
    }
} else {
    console.log("Later, hater!");
    }

