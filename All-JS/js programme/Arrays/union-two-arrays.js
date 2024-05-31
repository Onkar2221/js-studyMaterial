//  Find union of two arrays
// Union means - 
//  set A = {1,2,3}  ; set B ={3,4,5}

//  A U B = {1,2,3,4,5}  -- Union


function unionArray(a, b) {
    let combineArray = a.concat(b);
    let unionArray = [];

    // Loop through each element in the combined array
    for (let i = 0; i < combineArray.length; i++) {
        console.log(combineArray);
        let isUnique = true;

        // Check if the current element is already in the unionArray
        for (let j = 0; j < unionArray.length; j++) {
            if (combineArray[i] === unionArray[j]) {
                isUnique = false;
                break;
            }
        }

        // If the element is unique, add it to the unionArray
        if (isUnique) {
            unionArray.push(combineArray[i]);
        }
    }

    return unionArray;
}

const a = [1, 2, 3, 4];
const b = [4, 5, 6, 7];
console.log(unionArray(a, b)); // Output: [1, 2, 3, 4, 5, 6, 7]
