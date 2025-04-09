function countOccurrences(arr, value) {
    return arr.reduce((acc, curr) => {
        if (curr === value) {
            acc++;
        }
        return acc;
    }, 0); 
}

console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2));
console.log(countOccurrences(["a", "b", "a", "c"], "a"));
console.log(countOccurrences([5, 5, 5, 5], 5));
console.log(countOccurrences([1, 2, 3, 4], 5));
