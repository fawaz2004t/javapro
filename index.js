// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 2. Count Characters
function countCharacters(str) {
    return str.length;
}

// 3. Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Array Functions
// 1. Find Maximum and Minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// 2. Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// 3. Filter Array
function filterArray(arr, conditionFn) {
    return arr.filter(conditionFn);
}

// Math Functions
// 1. Factorial
function factorial(n) {
    if (n < 0) return -1; // Negative numbers don't have a factorial
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// 2. Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 3. Fibonacci Sequence
function fibonacciSequence(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];
    const sequence = [0, 1];
    while (sequence.length < terms) {
        const nextTerm = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextTerm);
    }
    return sequence;
}

// String Functions
console.log(reverseString("hello")); 
console.log(countCharacters("hello world"));
console.log(capitalizeWords("hello world"));

// Array Functions
console.log(findMax([1, 2, 3, 4, 5])); 
console.log(findMin([1, 2, 3, 4, 5])); 
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(filterArray([1, 2, 3, 4, 5], num => num > 3)); 

// Mathematical Functions
console.log(factorial(5)); 
console.log(isPrime(7)); 
console.log(fibonacciSequence(7)); 
