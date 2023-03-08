/**
 *
 * @param {arr} arr Array to be sorted
 * @returns  Sorted Array
 */

function mergeSort(arr) {
  if (arr.length === 0) return "Please provide a non empty array";
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (leftArr, rightArr) => {
  const result = [];

  let iL = 0;
  let iR = 0;

  while (iL < leftArr.length && iR < rightArr.length) {
    if (leftArr[iL] < rightArr[iR]) {
      result.push(leftArr[iL]);
      iL++;
    } else {
      result.push(rightArr[iR]);
      iR++;
    }
  }

  while (iL < leftArr.length) {
    result.push(leftArr[iL]);
    iL++;
  }

  while (iR < rightArr.length) {
    result.push(rightArr[iR]);
    iR++;
  }

  return result;
};

console.log(mergeSort([5, 8, 6, 7, 1, 8, 7, 9]));
console.log(mergeSort([]));
console.log(mergeSort([45, 98, 63, 75, 48, 95, 12, 36]));
