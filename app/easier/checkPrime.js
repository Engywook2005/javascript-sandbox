function checkPrime(num) {
    const isPrime = [2];

    for(let i = 2; i < Math.pow(i, 1/2); i++) {
        let isPrime = true;
        for(let j = 0; j < isPrime.length; j++) {
            if(i !== isPrime[j] && i % isPrime[j] === 0) {
                isPrime = false;
            }
        }
        isPrime.push(i);
        if(i === num) {
            return true;
        }
    }
    return false;
}