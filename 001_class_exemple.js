class Cars {
    constructor(name, type) {
        this.name = name
        this.type = type
    }
    car_name() {
        return this.name
    }
}

const car = new Cars("ford", "focus")

console.log(car.car_name());
console.log(car.name);
