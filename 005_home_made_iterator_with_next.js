// https://www.w3schools.com/js/js_object_iterables.asp
// Home Made Iterable
function myNumbers() {
    let n = 0;
    return {
        next: function() {
            n += 10;
            return {value:n, done:false};
        }
    };
}

// Create Iterable
const n = myNumbers();
n.next(); // Returns 10
console.log(n.next()); // Returns { value: 20, done: false }
console.log(n.next().value); // Returns 30
n.next(); // Returns 40 as a value in a Obj
n.next(); // Returns 50 as a value in a Obj


//The problem with a home made iterable:

// It does not support the JavaScript for..of statement.

// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
    let n = 0;
    done = false;
    return {
        next() {
            n += 10;
            if (n == 100) {done = true}
            return {value:n, done:done};
        }
    };
}

for (const num of myNumbers) {
    console.log(num);
}
