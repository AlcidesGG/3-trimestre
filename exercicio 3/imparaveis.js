const numbers = [2, 5, 8, 3, 9, 12, 7, 6];
let sumOdd = 0;

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        sumOdd += numbers[i];
    } 
}

if(sumOdd > 0) {
    console.log(`A soma total dos números ímpares é: ${sumOdd}`)
} else {
    console.log("Não há números ímpares no array")
}