// Practice problem-1:
// a.
const multiply = (first, second, third) => first * second* third;
const result = multiply(2, 3, 4);
// console.log(result);
// b.
const aim = `I am a web developer.
I love to code.
I love to eat biriani`;
// console.log(aim);
const add = (first, second = 20) => first + second;
const result4 = add(15);
// console.log(result4);

const friends = [ 'muhammad','rubel','hasan','ali', 'omar'];

const number =[2, 3, 4, 5, 6, 7];
const number1 = [20, 10, 30, 500, 41, 52, 56];
const result1 = [...number,...number1];
console.log(result1);
const largest = Math.max(...result1);
console.log(largest);

