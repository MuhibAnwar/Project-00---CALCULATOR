#!  /usr/bin/env/node

import inquirer from "inquirer"
const answer = await inquirer.prompt([
    { message : "Enter your name : ",type :"number", name : "first"},
    {message : "Enter your name : ",type :"number", name : "second"},
    {
        message:"Select the operator you want to perform : ",
        type:"list",
        name:"operator",
        choices:["addition","subtraction","multiplication","division"]
    }
]) 
if (answer.operator == "addition") {    
    console.log(answer.first+answer.second) 
}
else if  (answer.operator == "subtraction") {
    console.log(answer.first-answer.second) 
}
else if  (answer.operator == "multiplication") {
    console.log(answer.first*answer.second) 
}
else if  (answer.operator == "division") {
    console.log(answer.first/answer.second) 
}   
else {
    console.log("invalid operator") 
}

