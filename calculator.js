//var that will be use to store number
let x = undefined;
let y = undefined;
let op = "";

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