// // objects

// var myCoffee = {
//   coffeeFlavour: "Espresso",
//   coffeeTemperature: "cold",
//   coffeeOunce: 200,
//   coffeeMilk: true,
//   reheat: function() {
//     if (myCoffee.coffeeTemperature === "cold") {
//       console.log((myCoffee.coffeeTemperature = "pipping hot"));
//       console.log("coffee has been reheated");
//     }
//   },
//   myBreakfast: {
//     bread: "Toasted",
//     cereal: "Proper food",
//     fruits: "banana"
//   }
// };

// myCoffee["coffeeTemperature"] = "cold";
// console.log(myCoffee.reheat());

// const mark = {
//   name: "Mark",
//   tshirtColor: "Navy",
//   trouser: "Blue"
// };

// const lisa = {
//   name: "Lisa",
//   tshirtColor: "Red",
//   trouser: "Orange"
// };

// function Friends(name, tshirtColor, trouser) {
//   this.name = name;
//   this.tshirtColor = tshirtColor;
//   this.trouser = trouser;
// }

// // constructor
// var denny = new Friends("Denny", "White", "Dark Blue");
// console.log(denny.tshirtColor);

// // object Oriented Programming
// function sayHello() {
//   console.log("Hello");
// }

// console.log(sayHello());

// var example = "vale";

// function alertExample() {
//   anotherexample = "£$$$";
//   return example;
// }

// console.log(alertExample());
// console.log(anotherexample);

// function alertNum() {
//   var one = "1";
//   return one;
// }

// console.log(alertNum());


console.time("Array initialize");
var array= new Array(1000000);
for (var i = array.length - 1; i >= 0; i--) {
    array[i] = new Object();
};
console.timeEnd("Array initialize");