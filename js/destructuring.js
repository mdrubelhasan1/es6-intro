const fish = {
    name: 'King Hilsha',
    address: 'Chandpur',
    color: 'Silver',
    phone: '01755566987',
    price: 4000
};

// console.log(fish.phone);
// console.log(fish.phone);
// console.log(fish.phone);
// console.log(fish.phone);
// console.log(fish.phone);
// console.log(fish.phone);

// const phone = fish.phone;
// const price = fish.color;
// const address = fish.address;

const {age} = {name:'rubel', age: 26, qualification:'Bsc in EEE' };
console.log(age);

// console.log(phone);
// console.log(fish.price);

const {name, address, phone} = fish;
console.log(name, address, phone);

// Array destructuring:
const [a, b,c,d,e,f] = [12,45,123,45,89,85,];
console.log(a, b,c,d,e,f);
console.log(d);

const nayoks = ['Hazrat muhammad sm', 'Hazrat omar ra', 'Hazrat Ali ra', 'Hazrat Abu Bokor siddik ra'];
const [noone , notwo , nothree, nofour] = nayoks;
console.log(noone, nothree);

function getName (){
    return ['rubel', 'hasan','muhammad'];
};
const[ first, second, third] = getName();
console.log(third, first, second);

const array = [10, 23, 50,41];
array.unshift(25);
// console.log(array);
const y = x => x*x;
const z = y(5);
console.log(z);
const name1 = 'Hero'; 
const greetings = 'Welcome Home!'+' '+name1;

const sentance = `Welcome Home! ${name1} and ${2+3}`;
console.log(sentance);