function isPrime(number) {
  if (number <= 1) {
      return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
          return false; // checks if number is not prime
      }
  }
  return true; // checks if number is prime
}

console.log(isPrime(4))