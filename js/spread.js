const max = Math.max(10, 36, 58, 5000, 200,800,);
// console.log(max);

const numbers = [ 10, 36, 58, 200, 800 ];
const largest = Math.max(...numbers);
// console.log(numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(444);
numbers2.push(7777);
// console.log(numbers);
// console.log(numbers2);

const numbers3 = [...numbers];

const numbers4 = [555,666,...numbers, 56, 333];
// console.log(numbers4);

const numbers5 = [...numbers];
numbers5.push(555);
console.log(numbers5);
