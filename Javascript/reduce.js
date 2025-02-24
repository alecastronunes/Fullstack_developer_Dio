// Somando todos os números do array.

const arr = [1, 2, 3, 4, 5];

const totalSum = arr.reduce((total, value) => total += value, 0);

console.log(totalSum);
