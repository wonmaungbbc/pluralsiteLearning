// // // Just testing

// // // for loop
// // // for (let i = 6; i < 12; i++){
// // //     console.log(i)
// // // }

// // // let while
// // // let count = 0;
// // // while (count <= 5) {
// // //   console.log(count);
// // //   count++;
// // // }

// // // Storing Multiple Values in Arrays
// // let NumberArray = [1,2,9,8];
// // let stringArray = ['Won','Maung','Thein']
// // console.log(`Get the first string from stringArray : ${stringArray[0]}`)
// // console.log(NumberArray.length)

// // let suits = ["hearts", "spades", "shapes"];
// // let values = ["Ace", "Ten", "Queen", "four", "elel", "ieooe", "ieiei"];
// // // let deck = [];

// // //

// // // for (let i = 0; i < deck.length; i ++ ){
// // //     console.log(deck[i])
// // // }

// // function showMessage(message, anotherMessage, favnumber) {
// //   // console.log(`${message} ${anotherMessage}  ${favnumber}`);
// // }

// // showMessage("Hello", "I am Won. Hello World", 77);

// // function createDeck() {
// //   let deck = [];
// //   for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
// //     for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
// //       deck.push(values[valueIdx] + "of" + suits[suitIdx]);
// //     }
// //   }
// //   return deck;
// // }
// // let deck = createDeck();

// // function getNextCard() {
// //   return deck.shift();
// // }

// // // console.log(getNextCard(), getNextCard(), getNextCard());

// // // console.log(deck);

// // let resultofMath = Math.random() * 69;
// // resultofMath = Math.trunc(resultofMath);
// // // console.log(resultofMath);

// // let resultDate = new Date().toDateString();
// // // console.log(resultDate)

// // Switch statement testing
// const answer = "of course";
// switch (answer) {
//   case "Yes":
//     console.log("That will be lovely to go out tonight " + answer + "!!!");
//     break;
//   case "sorry":
//     console.log("I am afraid, I am busy this evening " + answer + ":(");
//     break;
//   case "of course":
//     console.log(
//       "Definately,let's meet at George Square. Looking forward to it"
//     );
//     break;
//   default:
//     console.log("I am always ready to go for a walk");
// }

// // const favDrink = "Choolate";
// // switch (favDrink) {
// //   case "Milk":
// //     console.log("I love " + favDrink);
// //     break;
// //   case "Chocolate":
// //     console.log("Chocolate is the best :" + favDrink);
// //     break;
// //   default:
// //     console.log("Almond and vinilla in my lovely coffee");
// // }
const myArray = [
  {
    name: "Exams & Revision",
    section: "support",
    label: {
      "en-GB": "Exams & Revision",
      "cy-GB": "",
      "ga-GB": "",
      "gd-GB": ""
    },
    description: {
      "en-GB": "Description goes here",
      "cy-GB": "",
      "ga-GB": "",
      "gd-GB": ""
    },
    slug: "exams-and-revision",
    tags: [
      "8c6c6a03-5555-41b2-9f71-589f0e9e58da",
      "4b4bb9e8-4989-40b8-b14b-7465210efa78",
      "1c4e3ed5-4bae-4a41-bc3f-09cb23915946",
      "d44f4e47-6b0b-49d1-8123-71357e108177"
    ]
  }
];

console.log(myArray.map(oneArray => oneArray.label["en-GB"]));

const sayMyName = name => `Hello ${name}`;

const name = "Won Maung Thein";
console.log(sayMyName(name));
