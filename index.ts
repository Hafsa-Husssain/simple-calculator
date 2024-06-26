#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your 1st Number", type: "number", name: "firstNumber" },
  { message: "Enter your 2nd Number", type: "number", name: "secondNumber" },
  {
    message: "Select operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication","Division"],
  },
]);

if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
 else {
  console.log("please enter valid operator");
}

