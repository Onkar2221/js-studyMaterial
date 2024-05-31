// find out even and odd position of array


function evenOdd(arr) {
    const even = [];
    const odd = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }

    return [even, odd];
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const [even, odd] = evenOdd(arr);

console.log("Even position num is:", even);
console.log("Odd position num is:", odd);
