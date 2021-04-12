/*
Team Cosmic Stardust (Victoria Gao, Andrew Jiang, Jessica Yeung)
SoftDev
K21 -- Get Scripty
2021-04-12
*/
var factI = function(n){
  var res = 1;
  for (var i = 0; i < n; i++) {
    res = res * (i + 1)
  }
  return res
}

var factR = function(n){
  if (n == 0) {return 1}
  else {return (n * factR(n-1))}
}

var fibI = function(n){
  var first = 0;
  var second = 1;
  var term = 0;
  while (n > 0){
    if (n == 1) {return first}
    if (n == 2) {return second}
    else {term = first + second; first = second; second = term; n--}
  }
  return term
}

var fibR = function(n){
  if (n == 1) {return 0}
  if (n == 2) {return 1}
  else {return fibR(n-1) + fibR(n-2)}
}
