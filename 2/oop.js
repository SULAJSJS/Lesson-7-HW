class Transport1 {
    constructor(type, name, model){
        this.type = type;
        this.name = name;
        this.model = model;
    }

    startEngine(){
        console.log('engine on' `${this.name, this.model}`)
    }
}

class Plane extends Transport1 {
    constructor(type, name, model, MaxSpeed){
        super(type, name, model, MaxSpeed)
        this.MaxSpeed = MaxSpeed;
    }
}


const Boeing = new Plane ("Pessager Plane", "Boeing", "Boeing 747", 18000, 10.9);
console.log(Boeing);
Boeing.startEngine();



