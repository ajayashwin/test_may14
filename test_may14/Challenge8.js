
// --------------Challenge 8-------------
// Filter out only the even numbers. Research the use of the modulo operator: %.
// Output:  [4, 10]

const numbers = [1,3,5,4,7,9,10];

const ans = numbers.filter(num=>num%2==0);
console.log(ans);