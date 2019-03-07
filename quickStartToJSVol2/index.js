const name = "Won";

switch (name) {
  case "Lion":
    console.log("This is Lion");
    break;
  case "elephant":
    console.log("This is elephant");
    break;
  case "Won":
    console.log("My name is " + name);
    break;
  default:
    console.log("This is the king");
}

// Fizz and buzz
// if number is divisible by 3, fizz
// if by 5, buzz
// if by 3 and 5, fizzbuzz

// loops exercise
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    if (i % 5 === 0) {
      console.log("fizzBuzz");
    } else {
      console.log("fizz");
    }
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

// While loop
var i = 0;
while (i < 11) {
  console.log(i);
  i++;
}

function sayHi(name) {
  return "Hello" + " " + name;
}
console.log(sayHi("Mr Won llll"));

function calculateArea(side) {
  return side * side;
}
console.log(calculateArea(3));

function randomNum() {
  return Math.floor(Math.random() * 16);
}
console.log(randomNum());

// Array
const myProps = ["Water bottle", "coffee cup", "phone", "charger"];
myProps[4] = "car";
myProps.push("New friend");
myProps.pop();
// console.log(myProps);

function greetFriend() {
  for (let i = 0; i < myProps.length; i ++) {
    return  myProps[i];
  }
}

console.log(greetFriend());
