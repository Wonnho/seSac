// 1
let string = 'Hello,Javascript';
console.log(string);
const string2 = 'Jello,Javascript';
console.log(string2);

// 2

let num = 1;
let str = '1';

console.log('data type:num,', typeof num);
console.log('data type:str,', typeof str);

// 3
// const variable = "can't allow constant to be reallocated";
// variable = 'reallocated';
// console.log(variable);

// change const to let,
let variable = "can't allow constant to be reallocated";
variable = 'reallocated';
console.log(variable);

// 4
let name = 'Lee Keun';

hello = `hello,${name}`;

console.log(hello);

// 5
let num1 = 100;
let num2 = 200;

console.log('add:', num1 + num2);
console.log('subtract:', num1 - num2);
console.log('times:', num1 * num2);
console.log('division:', num1 / num2);
console.log();

// 6

const prompt = require('prompt-sync')({ sigint: true });
let odd = prompt('write odd number:');
let even = prompt('write even number:');
console.log('Quotient:', Math.floor(num1 / 2));
console.log('remainder:', num2 % 2);

// 7 array indexing

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array[0]);
console.log(array[2]);
console.log(array[8]);
console.log(array[9]);

// 8

const arr = [];
arr.push(10);
arr.push(20);
arr.push(30);
arr.push(40);
arr.push(50);
console.log(arr);

let el = arr.push('ken');
console.log(arr);
console.log(el);

arr.unshift('Jerry');
console.log(arr);

// return array after deleting the first element
arr.shift('Thomas');
console.log(arr);

arr2 = arr;
console.log('arr2', arr2);

let el2 = arr.pop();
console.log(el2);

let slicing = arr.slice(1, 3);
console.log('slicing form 1 to 2:', slicing);

console.log();

// 9

let todo = {
  userId: 1,
  id: 1,
  title: 'access object',
  completed: false,
};

console.log('todo:', todo);

console.log(todo[0]);
console.log(todo[1]);
console.log(todo[2]);
console.log(todo[3]);

console.log(todo.userId);
console.log(todo.id);
console.log(todo.title);
console.log(todo.completed);

// 10

let person = {
  name: 'Yuari',
  age: 22,
  city: 'Kunma',
  location: 'dadakeshi',
  language: 'japanese',
};

console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.location);
console.log(person.language);
