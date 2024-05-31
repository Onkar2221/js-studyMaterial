function max_min(a) {
    let maximum = a[0];
    let minimum = a[0];

    for (let i of a) {
        console.log("Value in the list is : ", i);
        if (i < minimum) {
            minimum = i;
            console.log("min", minimum);
        } else if (i > maximum) {
            maximum = i;
            console.log("max", maximum);
        }
    }
    return maximum , minimum;
}

const a = [10, 20, 30, 40, 5, 6, 33, 69];
const result = max_min(a);

console.log("Maximum and Minimum value in the list is : ", result);
