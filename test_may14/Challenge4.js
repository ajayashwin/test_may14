// -------------Challenge 4----------
// Use the map method on the words array to return an array with just the first letter of each word capitalized (along with the rest of the word in lower case)
// Output:  ["Planes", "Trains", "Automobiles"]

const words = ["planes", "trains", "automobiles"];
const pets = ["goldfish", "dog", "turtle", "tiger"];

const ans = words.map(str => (str.substring(0,1)).toUpperCase()+str.substring(1));
console.log(ans); 