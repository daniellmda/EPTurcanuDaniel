function isPrime(n) {
  if (n < 2) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  if (n % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2)    {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(8));
console.log(isPrime(12));
console.log(isPrime(2));
console.log(isPrime(0));
console.log(isPrime(83));
