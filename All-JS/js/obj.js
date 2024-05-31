const stud = {
    name :"onkar",
    mark :78,
    printMark:function(){
        console.log("mark = " , this.mark)
    }

}

const emp = {
    calTax(){
        console.log("Tax rate is 10%");
    }
}
emp.calTax()


const karan = {
    salary : 25000
}
karan.salary


// -------------------------------------------------------------------------------------


class ToyotaCar{
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop")
    }

    setBrand(brand){
        this.brand = brand
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("Fortuner");

let lexus = new ToyotaCar();
lexus.setBrand("Lexus");