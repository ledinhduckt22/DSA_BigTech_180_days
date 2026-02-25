// Input: Given a number n, check whether it is even or odd.
// Output: Return true for even and false for odd.

// Examples:

// Input: n = 15
// Output: false
// Explanation: 15 % 2 = 1, so 15 is odd.

// Input: n = 44
// Output: true
// Explanation: 44 % 2 = 0, so 44 is even.

function isEven(n) {
  // Check the remainder when n is divided by 2
  return n % 2 === 0;
}

function isEvenByBitwise(n) {
  // The last bit of an even number is 0, and for an odd number, it is 1. So we can use bitwise AND operation to check the last bit.
  return (n & 1) === 0;
}

// Test cases
console.log(isEven(15)); // Output: false
console.log(isEven(44)); // Output: true
console.log(isEvenByBitwise(15)); // Output: false
console.log(isEvenByBitwise(44)); // Output: true
