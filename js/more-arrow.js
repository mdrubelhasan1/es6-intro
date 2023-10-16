const add = (first, second) => first + second;
const getFullname = (first, last) => first +' '+ last;
const multiply = (a, b) => a * b; 

const result = add( 10,20);
const fullname = getFullname('Rubel', 'Hasan');
const result1 = multiply(12,10);
console.log(result, fullname, result1);

// Two or more parameter calculation process is same:
const addAll = (a, b, c, d, e, f = 10) => a + b + c + d + e + f;
const sum = addAll(10, 11, 2, 1, 3, );
console.log(sum);

// No parameter arrow function:
const getPie = () => 3.14;
const value = getPie()
console.log(value);

// One parameter:
const dubleIt = (num) => num * 2;

// One parameter simple version:
const fiveTimes = num => num * 5;

const dubble = dubleIt(10);
const fivetimes = fiveTimes(20);
console.log(dubble, fivetimes);

// Multiline arrow function:
// No return from multiline arrow function by defult, for return something use return.

const doMath = (x, y, z) => {
    const firstsum = x + y;
    const secondsum = y + z;
    const multiplyResult = firstsum * secondsum;
    const result = multiplyResult / 2;
    return result;
}
