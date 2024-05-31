function myFunction(){
    console.log("Good Morning");
}
myFunction();


// Function to add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

// Get user input
var number1 = parseFloat(prompt("Enter the first number:"));
var number2 = parseFloat(prompt("Enter the second number:"));

// Check if the inputs are numbers
if (isNaN(number1) || isNaN(number2)) {
    console.log('Please enter valid numbers');
} else {

    // Call the function and display the result
    var sum = addNumbers(number1, number2);
    console.log("The sum of " + number1 + " and " + number2 + " is: " + sum);
}