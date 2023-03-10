 ES6 features that can be used for data manipulation:

for-of loop: This loop iterates over the values of an iterable object, such as an array.
Copy code
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}
Array.prototype.map(): This method creates a new array with the results of calling a provided function on every element in the calling array.
Copy code
const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map(number => number * 2);

console.log(doubleNumbers); // [2, 4, 6, 8, 10]
Array.prototype.filter(): This method creates a new array with all elements that pass the test implemented by the provided function.
Copy code
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // [2, 4]
Array.prototype.reduce(): This method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
