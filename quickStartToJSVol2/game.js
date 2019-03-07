var beginningScenario = [
  "Hello how r u",
  "Another scenario",
  "lovely view",
  "Nice weather"
];

var waponList = ["knife", "arrow", "stone", "stick"];
var survival = randomNumber(3);
function randomNumber(range) {
  return Math.round(Math.random() * range);
}
console.log(beginningScenario[randomNumber(beginningScenario.length - 1)]);
console.log(waponList[randomNumber(waponList.length - 1)]);

if (survival === 0) {
  console.log("You are killed by Zumbai");
} else if (survival === 1) {
  console.log("You are lucky today");
} else {
  console.log("You won the game");
}
