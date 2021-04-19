// Team Eggo :: Anya Zorin and Jessica Yeung 
// SoftDev pd0
// K23 -- Basic functions in JavaScript
// 2021-04-15r
// --------------------------------------------------

//CARRY OVER YOUR BEST JS fxns here


// ~~~ NEXT STEPS  ~~~
// as a duo...
// pair programming style


//Develop, then implement gcd(a,b), which returns the greatest common divisor of a and b.
function gcd(a,b){
    if (b==0){return a;}
    return gcd(b, a% b);
}

//Develop, then implement randomStudent(), which returns a randomly selected name from a list.
function randomStudent(list){
    return list[Math.floor(Math.random()*list.length)];
}
//You may want to create helper functions or external list variables here.
var students = ["Alice", "Bob", "Carl", "Ethan", "Fred" ]

//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.
