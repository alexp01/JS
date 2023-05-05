class Cars {
    constructor(name, type) {
        this.name = name
        this.type = type
    }
    car_name() {
        return this.name
    }
    get type_name() {
        return this.type
    }
    set type_name(type_value) {
        this.type = type_value
    }
}

const car = new Cars("ford", "focus")

console.log(car.car_name()); // ford
console.log(car.name); // ford
console.log(car.type_name); // focus

car.type_name = "new car type"
console.log(car.type_name); //new car type


// Alternative

// Define object
const obj = {counter : 0};

// Define setters and getters
Object.defineProperty(obj, "reset", {
    get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
    get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
    get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
    set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
    set : function (value) {this.counter -= value;}
});

// Play with the counter:
obj.reset
console.log(obj.counter); // 0
obj.add = 5;
console.log(obj.counter); // 5
obj.subtract = 1;
console.log(obj.counter); // 4
obj.increment;
console.log(obj.counter); // 5
obj.decrement;
console.log(obj.counter); // 4