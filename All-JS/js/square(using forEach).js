

// For given array of number print the square of each value using the forEach loop.


let arr = [1,2,3,4,5,6,7];

arr.forEach((arr) => {
    console.log(arr*arr);   // arr**2
})



let calSquare = (arr) => {
    console.log(arr*arr);
};

arr.forEach(calSquare);