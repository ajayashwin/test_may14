//---------- --Challenge 2----------
// Use the map method on the words array to remove the "s" from the end of each word.  Hint: Research the use of the String.slice() method to remove the final letter from a string. There are other String methods that could also be used.
// Output:  ["plane", "train", "automobile"]
const words = ["planes", "trains", "automobiles"];
const pets = ["goldfish", "dog", "turtle", "tiger"];

const ans = words.map(str=>str.slice(0, str.length-1));

console.log(ans);