let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = [
  "Ace",
  "king",
  "Queen",
  "Jack",
  "Ten",
  "Nine",
  "Eight",
  "Seven",
  "Six",
  "Five",
  "Four",
  "Three",
  "Two"
];

let deck = [];

for (let suitsId = 0; suitsId < suits.length; suitsId++) {
  for (let valuesId = 0; valuesId < values.length; valuesId++) {
    console.log(` ${values[valuesId]} of ${suits[suitsId]} `);
  }
}
