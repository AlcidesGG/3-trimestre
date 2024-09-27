const numbers = [3, 7, 5, 12, 8, -1, 10];
let allPositive = true;

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] < 0) {
        console.log(`Número negativo encontrado: ${numbers[i]}`);
        allPositive = false;
        break;
    }
}

if(allPositive) {
    console.log("Todos os números são positivos.");
} else {
    console.log("Nem todos os números são positivos.")
}