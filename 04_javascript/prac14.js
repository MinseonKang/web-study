let sum = 0;
for (let n = 1; n < 100; n++) {
    if (n % 2 === 0 || n % 3 === 0) {
        sum += n
    }
}
console.log(`2 또는 3의 배수의 총합: ${sum}`)