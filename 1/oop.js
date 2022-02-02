
class Transport {
    constructor(type, name, model){
        this.type = type;
        this.name = name;
        this.model = model;
    }
    
    startEngine(){
        console.log('engine on' `${this.name}`)
    }
}

class Car extends Transport {
    constructor(type, name, model, speed){
        super(type, name, model);
        this.speed = speed;
    }
}


const Audi = new Car ("car", "AUDI", "100", 70,) 
console.log(Audi);
Audi.startEngine();


