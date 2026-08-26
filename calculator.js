const args = process.argv.slice(2);
const operation = args[0]
const num1 = parseFloat(args[1])
const num2 = parseFloat(args[2])

if (operation == "add"){
    console.log(`Result- ${num1+num2}`);
} else if (operation == "Subtract"){
    console.log(`Result- ${num1-num2}`);
} else if (operation == "Multiply"){
    console.log(`Result- ${num1*num2}`);
} else if (operation == "Divide"){
    console.log(`Result- ${num1/num2}`);
} else{
    console.log("Invalid opration Performed...! PLEASE TRY AGAIN")
    
}