//airthmetic operations
//add
let add=9+10;
console.log("Addition:",add);

let sub=9-10;
console.log("Subtraction:",sub);

let mul=9*10;
console.log("Multiplication:",mul);     

let div=9/10;
console.log("Division:",div);

//relational operations 
let a=5;
let b=10;   
console.log("a is greater than b:",a>b);

console.log("a is less than b:",a<b);

console.log("a is equal to b:",a==b);   

//logical operations
let x=true;
//and
let y=false;    
console.log("x AND y:",x && y);

//or
console.log("x OR y:",x || y);
//not
console.log("NOT x:",!x);   

//assignment operations
let c=5;
c+=3; //c=c+3
console.log("c after +=3:",c);  

//bitwise operations
let p=5; //0101
let q=3; //0011         
console.log("p AND q:",p & q); //0001 =1
console.log("p OR q:",p | q);  //0111 =7

//operator precedence
let result=5 + 3 * 2;
console.log("Result of 5 + 3 * 2:",result); 

let result2=(5 + 3) * 2;
console.log("Result of (5 + 3) * 2:",result2); //parentheses will first execute
