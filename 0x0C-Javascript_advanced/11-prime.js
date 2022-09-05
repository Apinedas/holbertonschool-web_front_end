function countPrimeNumbers () {
    let primeNumbers = [];
    let isPrime = 1;
    for (let i = 2; i <= 20; i++) {
        for (j = i; j >= 2; j--) {
            if (i % j == 0 && j != i) {
                isPrime = 0;
                break;
            };
        };
        if (isPrime == 0) {
            isPrime = 1;
        } else {
            primeNumbers.push(i);
        }
    };
    return (primeNumbers.length);
};

let t0 = performance.now();

for (let i = 0; i < 100; i++) {
    setTimeout(function () { countPrimeNumbers(); });
};

let t1 = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`);
