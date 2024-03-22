
class car{ 

    constructor(modelName,modelYear,type,price){
    
        this.modelName =modelName
        this.modelYear =modelYear
        this.type =type
        this.price =price
    
    }
    makeNoise(){
        console.log(modelName +"빵!");
    }
}


const car1 = new car('R3','2024','e',5000);

car1.makeNoise();