function sum(...sum) {
    return sum.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5));