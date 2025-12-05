//functions in JavaScript

//write a function visit a city that takes ine parametervalue city_name when callwd with city name store the result in a variable named visited_city

function visit_city(city_name){
    return "Visited city: " + city_name;
}       
let visited_city=visit_city("banglore");
console.log(visited_city);


//create a function named color that takes one parameter value color_name inside the function crerate the anther function name  shade color for a color call the shade color function inside the color function and store the result in a variable named color_shade

function color(color_name){
    function shade_color(shade){
        return "Color: " + color_name + ", Shade: " + shade;
    }
    let color_shade = shade_color("dark");
    return color_shade;
}
let result=color("blue");       
console.log(result);



//Arrow function
// write a arrow function named add_numbers that takes two parameter values num1 and num2 and returns their sum store the result in a variable named sum_result
const add_numbers = (num1, num2) => {
    return num1 + num2;
}
let sum_result = add_numbers(5, 3);
console.log(sum_result);        

// write a function name as a process tea that take a another function make tea as parameter calls it with the argument "green tea" return the result store the result in a variable named tea_result

function process_tea(make_tea){
    return make_tea("green tea");
}       
function make_tea(tea_type){
    return "Tea made: " + tea_type;
}   
let tea_result = process_tea(make_tea);
console.log(tea_result);    


//write a function named"  createTea maker" that returns anotheer function . the rretured function should take one parameter tea_type and return "Tea type" and return  a message "Tea made: " and the tea type store the result in a variable named my_tea

function createTeaMaker(){      
    return function(tea_type){
        return "Tea made: " + tea_type;
    }
}
let teaMaker = createTeaMaker();
let my_tea = teaMaker("black tea");
console.log(my_tea);
    