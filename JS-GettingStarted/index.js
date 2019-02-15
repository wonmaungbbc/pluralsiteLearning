// Just testing

// for loop
// for (let i = 6; i < 12; i++){
//     console.log(i)
// }

// let while
// let count = 0;
// while (count <= 5) {
//   console.log(count);
//   count++;
// }

// Storing Multiple Values in Arrays
let NumberArray = [1,2,9,8];
let stringArray = ['Won','Maung','Thein']
console.log(`Get the first string from stringArray : ${stringArray[0]}`)
console.log(NumberArray)







let suits = ["hearts", "spades", "shapes"];
let values = ["Ace", "Ten", "Queen", "four", "elel", "ieooe", "ieiei"];
// let deck = [];

//

// for (let i = 0; i < deck.length; i ++ ){
//     console.log(deck[i])
// }

function showMessage(message, anotherMessage, favnumber) {
  // console.log(`${message} ${anotherMessage}  ${favnumber}`);
}

showMessage("Hello", "I am Won. Hello World", 77);

function createDeck() {
  let deck = [];
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
      deck.push(values[valueIdx] + "of" + suits[suitIdx]);
    }
  }
  return deck;
}
let deck = createDeck();

function getNextCard() {
  return deck.shift();
}

// console.log(getNextCard(), getNextCard(), getNextCard());

// console.log(deck);

let resultofMath = Math.random() * 69;
resultofMath = Math.trunc(resultofMath);
// console.log(resultofMath);

let resultDate = new Date().toDateString();
// console.log(resultDate)