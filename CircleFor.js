const  isPrime = (num) => {
    if (num < 2) {
        return false;
    }
    for (let count = 2; count <= num; count++) {
        if (num % count === 0) {
            return false;
         }
    }
            return true;
}

console.log(isPrime(21));