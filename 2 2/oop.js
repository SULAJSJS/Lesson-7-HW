class Transport2 {
    constructor(type, name, model){
        this.type = type;
        this.name = name;
        this.model = model;
    }

    startEngine(){
        console.log('engine on' `${this.name, this.model}`)
    }
}

class ship extends Transport2 {
    constructor(type, name, model, MaxSpeed){
        super(type, name, model)
        this.MaxSpeed = MaxSpeed;
    }
}

const Galeon = new ship ("Single-Masted", "Galeon", "AM600-02-RUS", 2000,)
console.log(Galeon);
Galeon.startEngine();