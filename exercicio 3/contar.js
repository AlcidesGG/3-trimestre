const numbers = [5, 3, 8, 5, 2, 5, 9, 1, 5, 3];
const target = 5;
let count = 0;

numbers.forEach((num) => {
    if(num === target) {
        count++;
    }
});

if(count > 0) {
    console.log(`O número ${target} aparece ${count} vezes no array.`);
} else {
    console.log(`O número ${target} não aparece no array.`)
}