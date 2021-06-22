// let firstName: string = 'Joakim';

// console.log(firstName);

const add = (num1: number, num2: number, num3?: number) => {
  if(num3)
    return num1 + num2 + num3;
  
  return num1 + num2
}

// console.log(add(5,10,2));
// console.log(add(5,10));




const add2 = (num1: number, num2: number, num3: number = 0): number => {
  console.log(num1 + num2 + num3);
  return num1 + num2 + num3;
}

// add2(5,10)


// TYPE ALIAS

type uid = string | number;
type user = {
  name: string,
  userId: uid 
}

const greet = (user1: user) => {
  console.log(`${user1.name} has the id of ${user1.userId}`);
}

greet({name: 'Joakim', userId: 'jjgjgdjsgjdsg'})

const user2: user = {
  name: 'Hans',
  userId: 131231313
}

greet(user2)