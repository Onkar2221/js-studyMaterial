function findSecondMinMax(arr) {
    let max = arr[0];
    let secondMax = arr[0];
    let min = arr[0];
    let secondMin = arr[0];

    for (let i = 0; i < arr.length; i++) {
        console.log("Value in the list is : ",array[i] ,"in index is ", i);

        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }

        if (arr[i] < min) {
            secondMin = min;
            min = arr[i];
        } else if (arr[i] < secondMin && arr[i] !== min) {
            secondMin = arr[i];
        }
    }

    return { secondMax, secondMin };
}

const array = [10, 5, 20, 15, 30];
const { secondMax, secondMin } = findSecondMinMax(array);

console.log("Second largest value in the array:", secondMax);
console.log("Second smallest value in the array:", secondMin);
