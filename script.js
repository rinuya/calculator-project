
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
}}


let equation = ""; 
const display = document.querySelector("#display");
//QUESTION: WHY DO I NEED TO ADD "event" in the addEventListener function and later in the "event.target.textContent"
const btn = document.getElementsByClassName("btn")
for (i=0; i<btn.length; i++){
    btn[i].addEventListener("click", event => {
        equation += event.target.textContent;
        display.innerText = equation;})}

//eventlistener for =
const equal = document.querySelector(".equal");
equal.addEventListener("click", ()=>{
    calculation();});

//calculation of string
const calculation = function (){
    
    //REGEX function for filtering needed, + and * need a backslash. others can go in brackets
    // let arr_equ = equation.split(/[\+\*/-]/g);
    let arr_equ = equation.split(" ");
    for (let i=0; i<arr_equ.length; i++){
        if (arr_equ[i]==="*" || arr_equ[i]==="/"){
            let temp = operate(arr_equ[i-1], arr_equ[i], arr_equ[i+1]);
            arr_equ[i-1] = temp;
            arr_equ.splice(i,2);
            i=0;    
        }
    }
    for (i=0; i<arr_equ.length; i++){
        if (arr_equ[i]=="+" || arr_equ[i]=="-"){
            var temp2 = operate(arr_equ[i-1], arr_equ[i], arr_equ[i+1]);
            arr_equ[i-1] = temp2;
            arr_equ.splice(i,2)
            i=0;}
    }
    result = Math.round(arr_equ*1000)/1000
    display.innerHTML= equation + " = " + result;
}

//clear button
const clear = document.querySelector(".clear");
clear.addEventListener("click", ()=>{
    equation = "";
    result="";
    display.innerHTML="";
});

//delete button
const delete1 = document.querySelector(".delete1");
delete1.addEventListener("click", ()=>{
    equation=equation.substring(0, equation.length -1)
    display.innerHTML= equation;
});




//suboperations for function operate(); might be unnecessary
const add = function(x, y) {
	return Number(x)+Number(y);
};

const subtract = function(x,y) {
	return x-y;
};

const multiply = function(x,y){
    return x*y;
}

const divide = function(x,y){
    return x/y;
};
//not being used
const power = function(num1,times) {
  let result = 1;
  for (i = 0; i<times; i++){
    result *= num1;
  }
	return result;
};
