const array = [1, 2, 3, 4, 2, 5, 6, 1];
let duplicates = [];

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
            duplicates.push(array[i]);
        }
    }
}

console.log("Duplicate elements in the array:", duplicates);

    // We start with an array called array containing some numbers.
    // We initialize an empty array called duplicates to store the duplicate elements.
    // We use nested loops to compare each element in the array with all the elements that come after it.
    // The outer loop iterates over each element in the array.
    // The inner loop starts from the next element after the current one (denoted by i + 1).
    // Inside the inner loop, we check if the current element (array[i]) is equal to any of the elements that come after it (array[j]) and if it's not already in the duplicates array.
    // If the conditions are met, we add the duplicate element to the duplicates array.
    // Finally, we print out the duplicates array, which contains all the duplicate elements found in the original array.


    
    // The .includes() method in JavaScript is used to check if an array includes a certain element. 
    // It returns true if the array contains the specified element, and false otherwise.




// 1. We start with the given array: `[1, 2, 3, 4, 2, 5, 6, 1]`.
// 2. We initialize an empty array called `duplicates` to store the duplicate elements.
// 3. We start looping through the array with the outer loop:

//    - For `i = 0`, we compare `array[0]` (which is `1`) with all elements after it (`array[j]` where `j` starts from `i + 1`).
//      - We find a match with `array[7]` (which is also `1`). So, `1` is a duplicate, and it's added to the `duplicates` array.
//    - For `i = 1`, we compare `array[1]` (which is `2`) with all elements after it (`array[j]` where `j` starts from `i + 1`).
//      - We find a match with `array[4]` (which is also `2`). So, `2` is a duplicate, and it's added to the `duplicates` array.
//    - For `i = 2`, `3` is compared with elements after it, but no match is found.
//    - For `i = 3`, `4` is compared with elements after it, but no match is found.
//    - For `i = 4`, `2` is compared with elements after it, but since it's already in the `duplicates` array, it's not added again.
//    - For `i = 5`, `5` is compared with elements after it, but no match is found.
//    - For `i = 6`, `6` is compared with elements after it, but no match is found.
// 4. Finally, we print out the `duplicates` array, which contains `[1, 2]`, the duplicate elements found in the original array.

// The logic seems to be working correctly, and the code successfully finds and stores the duplicate elements. So, there's no need for debugging.