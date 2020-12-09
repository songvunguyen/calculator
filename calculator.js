//var that will be use to store number
let x = undefined;
let y = undefined;
let op = "";
let isX = true;
let isFinal = false;

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
    return (a/b).toFixed(5);
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
    isX = true;
    isFinal = false;
}

function screenDisplay(content){
    if(isFinal){
        return;
    }

    let equation = document.querySelector("#equation");

    if(content === "+" || content === "-" || content === "*" || content === "/"){
            if(x != undefined && y != undefined){
                // isX = !(isX);
                x = operate(op, x, y);
                y = undefined;
                op = content;
                equation.textContent += " " + content + " ";
            }else{
                isX = !(isX);
                op = content;
                equation.textContent += " " + content + " ";
            }
            
    }else{
        if(isX){
            if(x == undefined){
                x = parseInt(content);
                equation.textContent += content;
            }else{
                let temp = x.toString();
                temp += content;
                x = parseInt(temp);
                equation.textContent += content;
            }
            
        }else{
            if(y == undefined){
                y = parseInt(content);
                equation.textContent += content;
            }else{
                let temp = y.toString();
                temp += content;
                y = parseInt(temp);
                equation.textContent += content;
            }
        }  
    }
    
}

function calculate(){
    isFinal = true;
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