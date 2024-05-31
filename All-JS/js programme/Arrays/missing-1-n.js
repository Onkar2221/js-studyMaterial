// Find missing number from 1 to n.


function findMissingNumber(arr, n) {
    // Calculate the sum of all numbers from 1 to n
    const totalSum = (n * (n + 1)) / 2;

    // Calculate the sum of all numbers in the given array
    let arraySum = 0;
    for (let i = 0; i < arr.length; i++) {
        arraySum += arr[i];
    }

    // The missing number is the difference between the total sum and the array sum
    const missingNumber = totalSum - arraySum;
    return missingNumber;
}

// Example usage:
const arr = [1, 2, 4, 5, 6];
const n = 6; // The range is from 1 to 6
console.log("The missing number is:", findMissingNumber(arr, n)); // Output: 3
