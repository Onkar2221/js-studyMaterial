let marks = [15,2,73,78,96,72,82,92]
console.log(marks);
console.log(marks.length) // 8

marks[1]=22;
console.log(marks);

let hero = ["ok", "am" , "tm" , "sn" , "dd" , "pg"]
console.log(hero);
console.log(hero.length) // 6

let a = typeof(marks)
console.log(a)   // object

// hero[0]  -->  ok

for(let i = 0; i < hero.length;i++){
    console.log(hero[i]);
}

// For-of loop 

for(let ele of hero){
    console.log(ele.toUpperCase());
}