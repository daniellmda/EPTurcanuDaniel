function countOccurrences(arr, value) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      counter++;
    }
  }

  return counter;
}

console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2));
console.log(countOccurrences(["a", "b", "a", "c"], "a"));
console.log(countOccurrences([5, 5, 5, 5], 5));
console.log(countOccurrences([1, 2, 3, 4], 5));
