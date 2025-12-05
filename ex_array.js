

//-------------EXERCISE-----------------//


// (1) declare players name array and access first player

let crick_players = [ "rohit", "dhoni", "kholi"];
first_player=crick_players[0];
console.log("First player:",first_player);

// (2) access third city from city names array

let city_names = [ "banglore", "mysore", "hubli"];
third_city=city_names[2];
console.log("Third city:",third_city);

// (3) update second language in programming languages array

let languages = [ "python", "PHP", "java"];
languages[1]="javascript";
console.log("Updated languages:",languages);

// (5)declar an arry name apple mango banana grape and  add orange push to the end of the array
//push snd pop methods

let fruits = [ "apple", "mango", "banana", "grape"];
fruits.push("orange");
fruits.push("guava");//adding last element
fruits.pop("guava");//removing last element
console.log(fruits);

//(6) you have an arry named  color  and create a soft copy of the array named

let color=["red","yellow","black","green"];
let soft_copy=color.slice();//creating soft copy of array
soft_copy[2]="white";//modifying soft copy
console.log("Color copy:",soft_copy);
 
// (7)hardcopy
let city=["banglore","mysore","hubli"];
let hard_copy=city;//creating hard copy of array
hard_copy[0]="delhi";//modifying hard copy
console.log("City copy:",
    hard_copy,"\n" ,"hard_copy",city);


    // (8) concatenate two arrays named BGMI_team and pubg_team and store in new_team array

    let BGMI_team=["OG","GODL","SOUL","RNTX"];
    let pubg_team=["APG","TSM","nova"];
    let new_team=BGMI_team.concat(pubg_team);
    console.log("New Team:", new_team);

    // (9)you have an arry named food menu containing rice,masala rice,curd rice,fried rice find the length of the array and store it in  variable named menu_length

    let food_menu=["rice","masala rice","curd rice","fried rice"];
    let menu_length=food_menu.length;
    console.log("Menu Length:",menu_length);


   // (10) you havae array animal containing lion,tiger,elephant,cheetah replace elephant with giraffe and checkif elephant  is in arry and store result in variable named is_elephant_present

   let animal=["lion","tiger","elephant","cheetah"];
   animal[2]="elephant".replace("elephant","giraffe");
   let is_elephant_present=animal.includes("elephant");
   console.log("Is elephant present:", is_elephant_present);