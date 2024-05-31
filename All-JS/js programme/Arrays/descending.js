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
