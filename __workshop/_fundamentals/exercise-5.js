// Exercise 5
//
// Part 1 - Write
// ---------------
// Write a function accepts an indeterminate amount of numbers as arguments and returns the sum of the squares of all the numbers.
//
// - If any element is not a number, skip it.
// - If no arguments are passed, return `undefined`

const addNumbers = (...nums) => {
  if (nums.length === 0) {
    return undefined;
  }
  let sum = 0;
  nums.forEach(item => {
    if (typeof item === "number") {
      sum = sum + Math.pow(item, 2);
    }
  })
  return sum;
}


  // let sum = 0;
  // let arrayedNums = nums.toString().split(",").map(Number);
  // for (i = 0; i < arrayedNums.length; i++) {
  //   if (typeof arrayedNums[i] === "number") {
  //     sum = sum + Math.pow(arrayedNums[i], 2);
  //   }
  //   }
  // return sum;
  // }



// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = addNumbers;
