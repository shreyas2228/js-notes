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
