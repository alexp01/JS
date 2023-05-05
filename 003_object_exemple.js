const myObj = {
    name: "John",
    age: 30,
    cars: [
        {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
        {name:"BMW", models:["320", "X3", "X5"]},
        {name:"Fiat", models:["500", "Panda"]}
    ]
}

console.log(myObj.age);
console.log(myObj["age"]);

const myObj2 = {
    name:"John",
    age:30,
    cars: {
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
    }
}
console.log(myObj2.cars.car2);