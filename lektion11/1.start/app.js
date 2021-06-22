var firstName = 'Joakim';
var age = 34;
var isActive = true;
// firstName = 35
firstName = 'Hans';
// console.log(firstName);
// FUNCTIONS
var add = function (num1, num2) {
    return num1 + num2;
};
// console.log(add(10, 5));
// console.log(add('10', '5'));
var add2 = function (num1, num2) {
    return num1 + num2;
};
// console.log(add2('10', '5'));
// console.log(add2(10, 5));
// ARRAYS
var names = ['Joakim', 'Hans', 'Tommy'];
names.push('Jeanette');
// names.push(34)
// console.log(names);
var mix = ['joakim', 34, true];
mix.push(55);
// mix.push({name: 'Joakim'})
// OBJECT
var user = {
    name: 'Joakim',
    age: 34,
    isActive: true
};
// user.name = 345
user.name = 'Hans';
// user.address = 'hemma' //kan inte lägga till eller ta bort på det vanliga sättet i javascript
// user = {
//   name: 'Joakim',
//   age: 35,
//   isActive: false,
// }
var userName = 'Joakim';
// userName = 'Joakim';
var userNames = [];
userNames.push('Joakim', userName);
var mixedArray = [];
var obj1;
obj1 = { name: 'Joakim', age: 34 };
obj1 = { firstName: 'Hans', isActive: true };
var obj2;
obj2 = {
    name: 'Joakim',
    age: 34,
    isActive: true
};
var lastName;
lastName = 'Wahlström';
lastName = 345;
lastName = true;
