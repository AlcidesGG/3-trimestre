const numbers = [12, 5, 8, 21, 9, 35, 4];
let max = numbers[0];

for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] > max) {
        max = numbers[i];
    }
}

if(numbers.length > 0) {
    console.log(`O maior número encontrado é: ${max}`);
} else {
    console.log("O array está vazio.")
}