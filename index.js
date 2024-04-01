function isPrime(number) {
  if (number <= 1) {
      return false;
  }

  for (let i = 0; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
          return false; // if not prime
      }
  }
  return true; // if prime
}

console.log(isPrime(4))