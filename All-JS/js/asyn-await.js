
function getData(dataId){
    return new Promise((resolve,reject) =>{

        setTimeout(() => {
            console.log("data" , dataId)
            resolve("Success");
        },3000)

    })

    
}


console.log("Fetching data-1 ...");
let p1 = getData(123);
p1.then((res) =>{
    console.log("result is - " , res);

    console.log("Fetching data-2 ...");
let p2 = getData(456);
p2.then((res) =>{
    console.log("result is - " , res);

})

})