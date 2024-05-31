// For given array with marks of stud -[85,97,44,37,76,60]
// find avg

let marks = [85,97,44,37,76,60];

let sum = 0;

for(let value of marks){
    // console.log(value)
    sum = sum + value;
}
console.log("Total sum of marks is : ",sum);   //399

let avg = sum / marks.length ; 
console.log("Total Avg of marks is :",avg); //66.5