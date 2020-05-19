let storedNumber;
let resetDisplay = false;

//Add two numbers
function add(num1, num2) {
    let answer = parseFloat(num1) + parseFloat(num2)
    storedNumber = answer;
    return answer;
}

//Subtract two numbers
function subtract(num1, num2) {
    return parseFloat(num2) - parseFloat(num1);
}

//Multiply two numbers
function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
}

//Divide two numbers
function divide(num1, num2) {
    if (parseFloat(num1) != 0) {
        return parseFloat(num2) / parseFloat(num1);
    }
    else return null;
}

function equals(event) {
    if(storedNumber != null)
    {
        let result = operatorChecker(event);
        storedNumber = result;
        let display = document.querySelector("#whiteNums");
        display.innerHTML = result.toPrecision(6);
        clearUpperDisplay();
        resetDisplay = true;
    }
}

function operatorChecker(event) {
    resetDisplay = false;
    let result;
    let num1 = parseFloat(getNumber());
    let num2 = storedNumber;
    let inDisplay = document.querySelector("#helperNums");
    currentOperator = inDisplay.innerHTML.slice(-1);
    if (currentOperator == "+") {
        result = operate(num1, num2, add);
    }
    else if (currentOperator == "-") {
        result = operate(num1, num2, subtract);
    }
    else if (currentOperator == "*") {
        result = operate(num1, num2, multiply);
    }
    else if (currentOperator == "/") {
        result = operate(num1, num2, divide);
    }
    else if (currentOperator == null) {
        console.log("CurrentOperator in Equals NULL");
    }

    return result;
}

//Get two numbers and a function and evaluate the function
function operate(num1, num2, callback) {
    if (typeof callback == "function")
        return callback(num1, num2);
}

function delNum(event){
    if(resetDisplay) {
        clearDisplay();
    }
    const numDiv = document.querySelector("#whiteNums");
    numDiv.innerHTML = numDiv.innerHTML.substring(0, numDiv.innerHTML.length-1);
}

//Append any numbers onto existing numbers
function displayNumber(event) {
    if(resetDisplay) {
        clearDisplay();
    }
    const numDiv = document.querySelector("#whiteNums");
    currentText = numDiv.innerHTML;
    currentButtonText = event.target.innerHTML;
    numDiv.innerHTML = currentText + currentButtonText;
}

function displayResult(number) {
    const numDiv = document.querySelector("#whiteNums");
    numDiv.innerHTML = number;
}

//Uses button pressed to display on the upper screen number and operator
function displaySmaller(event) {
    const upperBox = document.querySelector("#helperNums")
    const operatorText = event.target.innerHTML;
    upperBox.innerHTML = storedNumber + operatorText;
    clearLowerDisplay();
}

//Clear the Display Box
function clearDisplay() {
    storedNumber = null;
    resetDisplay = false;
    const clear = document.querySelector("#whiteNums");
    clear.innerHTML = "";
    const clear2 = document.querySelector("#helperNums");
    clear2.innerHTML = "";
}

function clearUpperDisplay() {
    const clear = document.querySelector("#helperNums");
    clear.innerHTML = "";
}

function clearLowerDisplay() {
    const clear = document.querySelector("#whiteNums");
    clear.innerHTML = "";
}

//Retrieve the current number in the DisplayBox
function getNumber() {
    const inDisplay = document.querySelector("#whiteNums");
    const numValue = inDisplay.innerHTML;
    return numValue;
}

//Push number to the top with operator to be used on the next number
function checkFunction(event) {
    let output;
    let currentNum;
    if (storedNumber != null) {
         output = operatorChecker(event);
         displaySmaller(event);
    } else {
        currentNum = getNumber();
        if (currentNum != null) {
            storedNumber = currentNum;
            displaySmaller(event);
        }
    }
}

let numSetter = document.querySelectorAll(".numButton");
numSetter.forEach((buttonIndex) => buttonIndex.addEventListener("click", displayNumber));

let acSetter = document.querySelector("#AC");
acSetter.addEventListener("click", clearDisplay);

let plusSetter = document.querySelector("#plus");
plusSetter.addEventListener("click", checkFunction);

let minusSetter = document.querySelector("#minus");
minusSetter.addEventListener("click", checkFunction);

let multiplySetter = document.querySelector("#multiply");
multiplySetter.addEventListener("click", checkFunction);

let divideSetter = document.querySelector("#divide");
divideSetter.addEventListener("click", checkFunction)

let equalsSetter = document.querySelector("#equal");
equalsSetter.addEventListener("click", equals);

let delSetter = document.querySelector("#del");
delSetter.addEventListener("click", delNum);