// JavaScript function to merge two sorted arrays:

function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    // Compare elements of both arrays and push the smaller one into the merged array
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Push remaining elements of arr1, if any
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Push remaining elements of arr2, if any
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example usage:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
