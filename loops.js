
//--------------LOOPS-----------------//

            //WHILE LOOP//

//while loop claculating the sum of 1 to 5 and store result in sum variable
let sum=0;
let i=1;    
while(i<=5){
    sum=sum+i;
    i++;
} 
console.log( sum);

//while loop that counts down from 5 to 1 and store the number in an array countdown

let countdown=[];
let a=5;
while(a>=1){
    countdown.push(a);
    a--;
}
console.log(countdown);

            //DOWHILE LOOP//

//write a do while loop that prompts a user to enter their favorite color type until they enter 'stop' and store all colors in an array named colors
// let colors=[];
// let color;  
// do{
//     color=prompt("Enter your favorite color (type 'stop' to end):");
//     if(color.toLowerCase()!=='stop'){
//         colors.push(color);
//     }
// }while(color.toLowerCase()!=='stop');
// console.log(colors);  


// write a do while loop that  adds number 1 to 10 and store the result in variable named total
let total=0;
let j=1;
do{
    total += j;
    j++;
}while(j <= 10);
console.log("do while ",total);

            //FOR LOOP//
//write a for loop that multiple array  [1,2,3,4,5] elements by 2 and store the result in new array named multiplied
let numbers=[1,2,3,4,5];
let even=[];      
for(let k=0;k<numbers.length;k++){
    even.push(numbers[k]*2);
}
console.log(even);

//writw a for loop that lists all the citys in arry ["hubli","mysore","banglore","delhi"] and store the result in new array named city_list
let citys=["hubli","mysore","banglore","delhi"];
let city_list=[];
for(let m=0;m<citys.length;m++){
    city_list.push(citys[m]);
}
console.log(citys);
console.log(city_list);