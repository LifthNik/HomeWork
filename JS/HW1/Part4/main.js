let firstName = prompt('Your First Name?');
let middleName = prompt('Your Middle Name?');
let age = prompt('Your Age?');

let person = `${firstName} ${middleName} ${age}`;
// console.log(firstName + ' ' + middleName + ' ' + age); //or the hard way.
console.log(person);

//optional
alert(`Hello, ${firstName + ' ' + middleName}. You are ${age} years old!`);