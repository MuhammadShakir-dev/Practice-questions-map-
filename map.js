// Given an array of numbers, double each number using the map function.
const numbers = [1, 2, 3, 4, 5];
// Expected output: [2, 4, 6, 8, 10]

let doubleNum = numbers.map((nums) => {return nums*2});
console.log(doubleNum);


// Given an array of names, convert each name to uppercase using the map function.
const names = ["Alice", "Bob", "Charlie"];
// Expected output: ["ALICE", "BOB", "CHARLIE"]

let bigCase = names.map((words) => {
    return words.toUpperCase();
})
console.log(bigCase);


// Given an array of strings, create a new array containing the length of each string using the map function.
const strings = ["apple", "banana", "orange"];
// Expected output: [5, 6, 6]

let findLength = strings.map((fruits) => {
    return fruits.length;
})
console.log(findLength)

// Given an array of numbers, calculate the square root of each number using the map function. Round the result to two decimal places.
const nums = [4, 9, 16, 25];
// Expected output: [2.00, 3.00, 4.00, 5.00]

const squareRoot = nums.map((nums) => {
    return Math.sqrt(nums);
})
console.log(squareRoot)

// Given an array of words, extract the first letter of each word and return a new array 
// containing these letters using the map function.

const words = ["apple", "banana", "cherry"];
// Expected output: ["a", "b", "c"]
let firstWord = words.map((words) => {
    return words[0]
})
console.log(firstWord);




