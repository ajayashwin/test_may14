// -------------Challenge 3-----------
// Use the map method on the words array to return an array with just the first letter of each word.
// Output:  ["p", "t", "a"]

const words = ["planes", "trains", "automobiles"];
const pets = ["goldfish", "dog", "turtle", "tiger"];

const ans = words.map(letter => letter[0]);
console.log(ans);

