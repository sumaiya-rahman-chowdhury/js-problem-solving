function createCounter(n) {
    return function () {
        return n++;
    };
}

const counter = createCounter(5); // Initialize with an initial value, for example, 5

console.log(counter()); // Output: 5
console.log(counter()); // Output: 6
console.log(counter()); // Output: 7
