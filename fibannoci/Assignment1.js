/**
 * Solving the Fibanocci sequence using iteration.
 * @param {num} num : The number of elements
 * @returns: The array of elements of the fibonacci sequence
 */

function fibs(num) {
  const array = [0, 1];
  if (num <= 0) {
    return "Please enter a valid number";
  }
  if (num === 1) return [0];
  if (num === 2) return array;

  for (let i = 2; i < num; i++) {
    array.push(array[array.length - 1] + array[array.length - 2]);
  }

  return array;
}

console.log(fibs(0)); // Returns Please enter a valid number
console.log(fibs(1)); // Returns [0]
console.log(fibs(2)); // Returns [0, 1]
console.log(fibs(3)); // Returns [0, 1, 1]
console.log(fibs(8)); // Returns [0, 1, 1, 2, 3, 5, 8, 13]
