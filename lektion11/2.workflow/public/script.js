"use strict";
// let firstName: string = 'Joakim';
// console.log(firstName);
var add = function (num1, num2, num3) {
    if (num3)
        return num1 + num2 + num3;
    return num1 + num2;
};
// console.log(add(5,10,2));
// console.log(add(5,10));
var add2 = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    console.log(num1 + num2 + num3);
    return num1 + num2 + num3;
};
var greet = function (user1) {
    console.log(user1.name + " has the id of " + user1.userId);
};
greet({ name: 'Joakim', userId: 'jjgjgdjsgjdsg' });
var user2 = {
    name: 'Hans',
    userId: 131231313
};
greet(user2);
