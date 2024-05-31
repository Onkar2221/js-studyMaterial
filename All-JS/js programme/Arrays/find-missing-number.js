// a = [1,2,3,5,7,9,10];
// find missing element from 1 to 10. 


let a = [1, 2, 3, 5, 7, 9, 10];
let arrayLength = a.length;
console.log("arrayLenght is ",arrayLength);


let maximum = a[0];
let minimum = a[0];
let sum = 0;

// Find maximum, minimum, and calculate sum
for (let i of a) {
    if (i < minimum) {
        minimum = i;
    } else if (i > maximum) {
        maximum = i;
    }
    sum += i;
}

console.log("minimum number is ", minimum);
console.log("maximum number is ", maximum);
console.log("sum is", sum);

// Calculate expected sum
let expected_sum = ((maximum + 1) * (maximum)) / 2;
console.log("Expected sum is ", expected_sum);


let missingElements = [];
for (let num = minimum; num <= maximum; num++) {
    let found = false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === num) {
            found = true;
            break;
        }
    }
    if (!found) {
        missingElements.push(num);
    }
}
console.log(missingElements);