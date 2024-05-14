// --------------Challenge 6-------------
// Use the filter method on the same pets array. Filter out only the pets whose names start with the letter 't'.
// Output: ["turtle", "tiger"] 

const words = ["planes", "trains", "automobiles"];
const pets = ["goldfish", "dog", "turtle", "tiger"];

const ans = pets.filter(str => str.substring(0,1)=="t");
console.log(ans);