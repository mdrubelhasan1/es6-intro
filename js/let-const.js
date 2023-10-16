// breakup with var
// no more use of var
// let : let it to reassign
// const : do not allow to reassign.

let money = 25;
money = 35;
console.log(money);

const hamas = 'palestine';
// hamas = 'gaza';
console.log(hamas);

const numbers = [12, 23, 25, 14, 25];
// reassign will not allow in const
// numbers = [12, 58, 74, 77, 85, 65, 45];
numbers.push(123);
numbers[1] = 999;
console.log(numbers);

const student = {
    name: 'rubel',
    address: 'piarapur',
    age: '26'
    
};
student.name = 'rubel hasan';
console.log(student);

