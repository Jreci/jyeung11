// Team Eggo :: Anya Zorin and Jessica Yeung 
// SoftDev pd0
// K24 -- Getting more comfortable with the dev console and the DOM
// 2021-04-15r
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
console.log("AYO");//prints AYO in the console

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
//returns 30 more than input and does not change value of j
var f = function(x) {
  var j=30;
  return j+x;
};



//instantiate an object
// basically a dictionary, key value pairs
var o = { 'name' : 'Thluffy',
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };


//(define fact (lambda (n) ...)
// gives the factorial, also in the for loop no variable is defined
var fact = function(n) {
  var prod=1;
  for ( ; n > 1 ; n--){
    prod = prod * n;
  }
  return prod;
};


//(define fact (lambda (n) ...)
var factR = function(n) {
  if ( n<=1 ) {
    return 1;
  }
  else {
    return n * factR(n-1);
  }
};


var addItem = function(text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};

// same functionanlity as above but done using recursion
var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};

//makes it so that each item has a red class
var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};

//makes it so red and blue alternate (odd and even)
var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

//callde upon e which is an event (click in this case), and the button that is clicked is "this"
var buttonCallback = function(e) {
  console.log("\n\nhere comes e...");
  console.log(e);
  console.log("\n\nhere comes 'this'...");
  console.log(this);
}

//adds the eventlistener for button b so onclick works
var b = document.getElementById('b');
b.addEventListener('click', buttonCallback);

//displays "this" from "helist" when clicked on
var redCallback = function(e) {
  console.log("\n\n---redCallback invoked---")
  console.log(this);
  this.classList.add('red');
}
//defines list and list items
var thelist = document.getElementById("thelist");
var litems = thelist.children;
//onclick each button calls redcallback, and hen hovered over changes green
for(var i = 0; i < litems.length; i++) {
  litems[i].addEventListener('click', redCallback);
  litems[i].addEventListener('mouseover', function(e){
    console.log("user has moved into this:" + this);
    this.classList.toggle('green');
  });
//after hover color turns blue
  litems[i].addEventListener('mouseout', function(e){
    console.log("user has moved out of this:" + this);
    this.classList.toggle('blue');
  });
}
