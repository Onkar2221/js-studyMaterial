// WTF Rotate array

// arr = [1,2,3,4,5,6,7]
// k = 3   -- k = num. of rotation

//  k = 1  ;  -> [7,1,2,3,4,5,6]
//  k = 2  ;  -> [6,7,1,2,3,4,5]
//  k = 3  ;  -> [5,6,7,1,2,3,4]


//  Using pop()  and unshift() method

function arrayRotation(arr, rotation) {
    for (let i = 0; i < rotation; i++) {
        arr.unshift(arr.pop());
        console.log("number of shift:", i, "output:", arr);
    }

    return  arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log("final output:", arrayRotation(arr, k));


// number of shift: 0 output: [
//     7, 1, 2, 3,
//     4, 5, 6
//   ]
//   number of shift: 1 output: [
//     6, 7, 1, 2,
//     3, 4, 5
//   ]
//   number of shift: 2 output: [
//     5, 6, 7, 1,
//     2, 3, 4
//   ]
//   final output: [
//     5, 6, 7, 1,
//     2, 3, 4
//   ]


