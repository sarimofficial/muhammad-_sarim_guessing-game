#!/usr/bin/env node
import inqurirer from "inquirer";
//1) computer will generate a random number

//2 USER INPUT FOR GUESSING NUMBER

//3 Compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random()* 6 +1);



const answers = await inqurirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:",

    },
]);

if(answers.userGuessedNumber === randomNumber ){
    console.log("Congtratulation! you guessed right number.");
    
}else{
    console.log("you guessed wrong number");
    
}
