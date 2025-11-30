// looping statements in JavaScript

// problem 1: write a for loop that calu;ates sum of all the numbers from 1 to 10 and prints the result to the console
let sum = 0;
let i = 1;
while(i<=10){
    sum+=i;
    i++;
}
console.log(sum);

// problem 2: write a while loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'.
let countdown = [];
let j = 5;
while(j>=1){
    countdown.push(j);
    j--;
}
console.log(countdown);

// problem 3: write a do-while loop that prompts the user to enter a number until they enter stop. Store all entered numbers in an array named 'userNumbers'.
// let userNumbers = [];
// let userInput;
// do {
//     userInput = prompt("Enter a number (or type 'stop' to finish):");
//     if(userInput !== "stop") {
//         userNumbers.push(Number(userInput));
//     }
// } while(userInput !== "stop");
// console.log(userNumbers);


// write a do while loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'
let total = 0;
let k = 1;
do {
    total += k;
    k++;
} while(k <= 3);
console.log(total);

// write a for loop that multiplies each elemsent in an array named 'factors' by 2 and stores the results in a new array named 'doubledFactors'
let factors = [1, 2, 3, 4, 5];
let doubledFactors = [];

for(let i=1; i<=factors.length-1; i++){
    doubledFactors.push(factors[i] * 2);
}

console.log(doubledFactors);

// write a fro loop that listes all the citis in an array named 'cities' and store it in a new variable prints them to the console
let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

let cityCopy=[];

for(let i=0; i<cities.length; i++){
    cityCopy.push(cities[i]);
}
console.log(cityCopy);
