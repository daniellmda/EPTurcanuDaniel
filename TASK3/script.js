function reverseArray(arr) {
  const reversedArr = [];

  // Parcurgerea arrayiului
  for (let a = arr.length - 1; a >= 0; a--) {
    reversedArr.push(arr[a]);
  }

  return reversedArr;
}

console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray(["a", "b", "c"]));
console.log(reverseArray([5, 4, 3, 5, 4]));
console.log(reverseArray([1, 2, 3, 4, 5, 6]));
