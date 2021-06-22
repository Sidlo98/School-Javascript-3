let firstName = 'Joakim';
let age = 34;
let isActive= true;

// firstName = 35
firstName = 'Hans'

// console.log(firstName);




// FUNCTIONS

const add = (num1, num2) => {
  return num1 + num2;
}


// console.log(add(10, 5));
// console.log(add('10', '5'));

const add2 = (num1: number, num2: number) => {
  return num1 + num2
}

// console.log(add2('10', '5'));
// console.log(add2(10, 5));


// ARRAYS

let names = ['Joakim', 'Hans','Tommy']
names.push('Jeanette')
// names.push(34)

// console.log(names);

let mix = ['joakim', 34, true];
mix.push(55)

// mix.push({name: 'Joakim'})


// OBJECT

let user = {
  name: 'Joakim',
  age: 34,
  isActive: true,
}

// user.name = 345
user.name = 'Hans'
// user.address = 'hemma' //kan inte lägga till eller ta bort på det vanliga sättet i javascript

// user = {
//   name: 'Joakim',
//   age: 35,
//   isActive: false,
// }

let userName : string = 'Joakim';
// userName = 'Joakim';
let userNames: string[] = [];

userNames.push('Joakim', userName)

let mixedArray: (string | number)[] = []


let obj1: object;

obj1 = { name: 'Joakim', age: 34 };
obj1 = { firstName: 'Hans', isActive: true }

let obj2: {
  name: string,
  age: number,
  isActive: boolean,
}
obj2 = {
  name: 'Joakim', 
  age: 34,
  isActive: true
}

let lastName: any;

lastName = 'Wahlström';
lastName = 345;
lastName = true;






