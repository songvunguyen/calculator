//var that will be use to store number
let x = undefined;
let y = undefined;
let op = "";
let display = "";

function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(op, a, b){
    switch(op){
        case "+":
            return add(parseInt(a), parseInt(b));
            break;
        case "-":
            return substract(parseInt(a), parseInt(b));
            break;
        case "*":
            return multiply(parseInt(a), parseInt(b));
            break;
        case "/":
            return divide(parseInt(a), parseInt(b));
            break;
        default:
            return "Error";
    }
}

function clearScreen(){
    let equation = document.querySelector("#equation");
    let result = document.querySelector("#result");
    equation.textContent = "";
    result.textContent = "";
    
    //reset all global variables
    x = undefined;
    y = undefined;
    op = "";
}

function screenDisplay(content){
    if(x != undefined && y != undefined && op != ""){
        return;
    }

    let equation = document.querySelector("#equation");

    if(content === "+" || content === "-" || content === "*" || content === "/"){
            x = parseInt(equation.textContent);
            op = content;
            equation.textContent += " " + content + " ";
    }else{
        y = parseInt(content);
        equation.textContent += content;
    }
    
}

function calculate(){
    return operate(op, x, y);
}

let clear = document.querySelector("#C");
clear.addEventListener('click',() => {
    clearScreen();
});

let digits = document.querySelectorAll(".digits");
digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        screenDisplay(digit.textContent);
    });
});

let operands = document.querySelectorAll(".operand");
operands.forEach((operand) => {
    operand.addEventListener('click', () => {
        screenDisplay(operand.textContent);
    });
});

let equal = document.querySelector("#equal");
equal.addEventListener('click',() => {
    let result = document.querySelector("#result");
    let num = calculate();
    console.log(x);
    console.log(y);
    console.log(op);
    result.textContent = num.toString();
});