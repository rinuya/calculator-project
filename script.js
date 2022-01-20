const operate = function(x, operator, y){
    switch(operator){
        case "/"    :
            return divide(x,y);
        case "*"    :
            return multiply(x,y);
        case "+"     :
            return add(x,y);
        case "-"     :
            return subtract(x,y);
}
}


const add = function(x, y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

// const sum = function(array){
//   return array.reduce((u, y) =>  u + y, 0);
// };
// const multiply = function(array) {
//   return array.reduce((x,y) => x*y);
// };
const multiply = function(x,y){
    return x*y;
}

const divide = function(x,y){
    return x/y;
};

const power = function(num1,times) {
  let result = 1;
  for (i = 0; i<times; i++){
    result *= num1;
  }
	return result;
};
