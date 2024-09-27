const numbers = [3, 5, 7, 8, 10, -4, 6, -2];
let foundNegative = false;

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] < 0) {
        console.log(`O primeiro número negativo encontrado: ${numbers[i]}`);
        foundNegative = true;
    }
}

if(!foundNegative) {
    console.log("Não há números negativos na lista.");
}