
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


//------challenges--------//


//(1) write a for loop that loop through the arry ["apple","banana","grape","mango"] and stops the loop when it reaches "grape" and store the result in new array named fruits_list
let fruits=["apple","banana","grape","mango"];
let fruits_list=[];
for(let n=0;n<fruits.length;n++){
    if(fruits[n]==="grape"){
        break;
    }
    fruits_list.push(fruits[n]);
}
console.log(fruits_list); 

//continue statement
let city_names=["banglore","mysore","hubli","delhi","pune"];
let filtered_cities=[];     
for(let t=0;t<city_names.length;t++){
    if(city_names[t]==="delhi"){
        continue;
    }
    filtered_cities.push(city_names[t]);
}
console.log(filtered_cities);   
  
// for of loop

//use a for of loopto itterate the array [10,20,30,40,50] and stop when the number is 40 is found and store the result in new array named numbers_list
let nums=[10,20,30,40,50];
let numbers_list=[];        
for(let num of nums){
    if(num===40){
        break;
    }
    numbers_list.push(num);
}
console.log(numbers_list);  


// for in loop


//use for in loop to loop throught an object contanig city population and store the result in new object named city_population_copy
// let city_population={
//     banglore:8443675,       
//     mysore:920550,
//     hubli:943788
// };
// let city_population_copy={};

// for(let city in city_popula){
//     if(city==="mysore"){    
//         break;
//     }
//     city_population_copy[city]=city_population[city];
// }
// console.log(city_population_copy);   

// for Each

//write a for each loop that itrate thriught the array citys=["hubli","mysore","banglore","delhi"]  stopping when it reaches "banglore" and store the result in new array named city_listed
let citys_list=["hubli","mysore","banglore","delhi"];
let city_listed=[];         
citys_list.forEach(function(city){
    if(city==="banglore"){
        return;
    }
    city_listed.push(city);
});
    console.log(city_listed);


//write a for each loop loop that iterate throught the arry ["hubli","mysore","banglore","delhi"] and skip "mysore" and store the result in new array named filtered_citys
let city_array=["hubli","mysore","banglore","delhi"];
let filtered_citys=[];  
city_array.forEach(function(city){
    if(city==="mysore"){
        return;
    }       
    filtered_citys.push(city);
}
);
console.log(filtered_citys);        

// write for lop that itrate throught array [2,4,6,8,10] and skip the value 6 and store the result in new array named doubled_numbers
let arr_numbers=[2,4,6,8,10];
let doubled_numbers=[];         
for(let i=0;i<arr_numbers.length;i++){
    if(arr_numbers[i]===6){
        continue;
    }
    doubled_numbers.push(arr_numbers[i]*2);
}
console.log(doubled_numbers);
  
//use a for-of loop to iterate throught the array [blue,green,red,yellow] and stop when the length of the curreent color is greater than 5 store the iterated over in array named short_colors
let colors_array=["blue","green","red","yellow"];
let short_colors=[];
for(let color of colors_array){
    if(color.length > 10){
        break;
    }
    short_colors.push(color);
}
console.log(short_colors);  
