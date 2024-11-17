alert("Welcome to the Secret Number game show!");
let maxNumber = 100;
let secretNumber = parseInt(Math.random() * maxNumber + 1);
//console.log(secretNumber);
let userTry;
let tryes = 1;

while (userTry != secretNumber){
    userTry = prompt(`Choose a number between 0 and ${maxNumber}`);
    
    if (secretNumber == userTry) { 
        break;
} else { 
        if(userTry < secretNumber) {
            alert("Sorry, try a bigger number!");
        } else {
            alert("Sorry, try a small number!");
        }
        tryes++;
        }
    }
//Com operadores ternários   
let numTryes = tryes > 1 ? "tryes" : "try";
alert (`You ROCK with ${tryes} ${numTryes}`);

// if (tentativas > 1) {
//             alert (`You ROCK with ${tentativas} tryes.`);
//         } else {
//             alert (` You ROCK with ${tentativas} try.`);
//     };
