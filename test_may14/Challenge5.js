
// --------------Challenge 5------------
// Use the filter method on the pets array given . Filter out only the pets that have 5 or less letters in their name. 
// Output: ["dog", "tiger"]

const words = ["planes", "trains", "automobiles"];
const pets = ["goldfish", "dog", "turtle", "tiger"];

const ans = pets.filter(pet => pet.length <=5);
console.log(ans);