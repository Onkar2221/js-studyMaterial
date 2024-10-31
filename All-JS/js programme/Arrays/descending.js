// Descending order


function descendingSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let maxIndex = i; // Change variable name
        for (let j = i + 1; j < len; j++) {
            if (arr[j] > arr[maxIndex]) { // Change the comparison operator
                maxIndex = j; // Update maxIndex
            }
        }
        if (maxIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }
    return arr;
}

// Example usage:
let arr = [5, 3, 8, 1, 2];
console.log("Descending order:", descendingSort(arr));


// ---------------------------------------------------------------------------------------------

let numbers = [5, 2, 9, 1, 7];
numbers.sort((a, b) => b - a);
console.log(numbers);


// .sort() method sorts the array in place.
// The (a, b) => b - a comparator function sorts the numbers in descending order.
//  When b - a is positive, b will be placed before a, which achieves descending order.