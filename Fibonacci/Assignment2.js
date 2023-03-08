/** *
 * @param {num} num: Number of elements
 * @returns: The result array of the fibonacci sequence
 */
function fibsRec(num) {
  return num <= 0
    ? "Please enter a valid number."
    : num === 1
    ? [0]
    : num === 2
    ? [0, 1]
    : [
        ...fibsRec(num - 1),
        fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3],
      ];
}
console.log(fibsRec(-1)); // returns "Please enter a valid number of elements to be given an answer."
console.log(fibsRec(1)); // returns [0]
console.log(fibsRec(2)); // returns [0, 1]
console.log(fibsRec(3)); // returns [0, 1, 1]
console.log(fibsRec(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
