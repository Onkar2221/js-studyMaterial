
let numbers = [5, 2, 8, 1, 4];
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 4, 5, 8]


// The sort method sorts elements in place.
// (a, b) => a - b is a comparator function. If a - b is negative, a comes before b; 
// if positive, a comes after b, resulting in ascending order.