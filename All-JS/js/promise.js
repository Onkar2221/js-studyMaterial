// let promise = new Promise((resolve , reject) => {
//     console.log("I am Promise");
//     resolve("123");
//     reject("Error");
// })

// const getpromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am promise");

//         setTimeout(() => {
//             console.log("onkar");
//         }, 2000);

//         resolve("success");
//         // reject("Network error");
//     });
// };

// let promise1 = getpromise();
// promise1.then((res) => {
//     console.log("promise fulfilled -", res);
// });

// let promise2 = getpromise();
// promise2.catch((err) => {
//     console.log("reject -", err);
// });


// -------------------------------------------------------------------------------

// Promise chaining

// function asynFun() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("Some data 1");
//             resolve("Success");

//         }, 4000);
//     })
// }

// console.log("Fetching data");
// let p1 = asynFun();
// p1.then((res) =>{
//     console.log("result is - " , res);
// })

// ---------------------------------------------------------------------------

function asynFun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("data 1 is fetching");
            resolve("Success-1");

        }, 4000);
    })
}


function asynFun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("data 2 is fetching");
            resolve("Success-2");

        }, 4000);
    })
}

console.log("Fetching data-1 ...");
let p1 = asynFun1();
p1.then((res) =>{
    console.log("result is - " , res);

    console.log("Fetching data-2 ...");
let p2 = asynFun2();
p2.then((res) =>{
    console.log("result is - " , res);
});
})

