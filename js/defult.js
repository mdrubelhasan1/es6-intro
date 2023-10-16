// function add(first, second){
//     console.log(first, second);
//     second = second || 0;
//     // if(second === undefined){
//     //     second = 0;
//     // }
//     const total = first + second;
//     return total;
// };
function add(first = 100, second = 0 ){
    const total = first + second;
    return total;
}

const result = add();
console.log(result);

function fullName(first, last ={address: 'piarapur', post:'kuchiamara', ps:'ullahpara'}){
    const name = first + ' ' + last;
    return name;
};
const name1 = fullName('Rubel');
console.log(name1);
 const type = typeof(name1);
 console.log(type);
