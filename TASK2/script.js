function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return n > 1;
}

console.log(isPrime(8));
console.log(isPrime(12));
console.log(isPrime(2));
console.log(isPrime(0));
console.log(isPrime(83));
