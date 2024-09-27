const numbers = [10, 22, 35, 47, 53, 67, 82, 91];
const target = 53;
let found = false;

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] === target) {
        console.log(`Número ${target} encontrado na posição ${i}.`)
        found = true;
        break;
    }
}

if(!found) {
    console.log(`Número ${target} não encontrado no array.`);
}