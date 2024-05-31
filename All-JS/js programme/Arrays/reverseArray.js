// Reverse array

function reverseArray(arr){
    let reverseArray = [];
    
    for(let i = arr.length - 1; i >= 0; i--){

        reverseArray.push(arr[i]);

    }
    return  reverseArray
}

const  originalArray = [1,2,3,4,5];
const reverse = reverseArray(originalArray);
console.log(reverse);