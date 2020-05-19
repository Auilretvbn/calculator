let storedNumber;

//Add two numbers
function add(num1, num2) {
    let answer = parseInt(num1) + parseInt(num2)
    storedNumber = answer;
    return answer;
}

//Subtract two numbers
function subtract(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

//Multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

//Divide two numbers
function divide(num1, num2) {
    if(num2 != 0) {
        return num1 / num2;
    }
    else return "error";
}

function result(num)
{
    clearDisplay();
    clearUpperDisplay();

    ans = document.querySelector("#whiteNums");
    ans.innerHTML = num;
}

function equals(event){
    getNumber
}

//Get two numbers and a function and evaluate the function
function operate(num1, num2, callback) {

    if (typeof callback == "function")
        return callback(num1, num2);

}

//Append any numbers onto existing numbers
function displayNumber(event) {
    const numDiv = document.querySelector("#whiteNums");
    currentText = numDiv.innerHTML;
    currentButtonText = event.target.innerHTML;
    numDiv.innerHTML = currentText + currentButtonText;
}

//Uses button pressed to display on the upper screen number and operator
function displaySmaller(event) {
    const upperBox = document.querySelector("#helperNums")
    const operatorText = event.target.innerHTML;
    getNumber();
    clearDisplay();
    upperBox.innerHTML = storedNumber + operatorText;
}

//Clear the Display Box
function clearDisplay(){
    const clear = document.querySelector("#whiteNums");
    clear.innerHTML = "";
}

function clearUpperDisplay(){
    const clear = document.querySelector("#helperNums");
    clear.innerHTML = "";
}

//Retrieve the current number in the DisplayBox
function getNumber(){
    const inDisplay = document.querySelector("#whiteNums");
    const numValue = inDisplay.innerHTML;
    storedNumber = numValue;
    return storedNumber;
}

//Push number to the top with operator to be used on the next number
function checkFunction(event){
    if(storedNumber) {
        let inDisplay = document.querySelector("#helperNums");
        currentOperator = inDisplay.innerHTML.slice(-1);
        if(currentOperator == "+") {
            let newNumValue = getNumber()
            operate(storedNumber, newNumValue, add);

            displaySmaller(event);
        }

        newNum = document.querySelector("#whiteNums");
        newNumValue = newNum.innerHTML;
        
    } else {
        displaySmaller(event);
    }
}



let numSetter = document.querySelectorAll(".numButton");
numSetter.forEach((buttonIndex) => buttonIndex.addEventListener("click", displayNumber));

let acSetter = document.querySelector("#AC");
acSetter.addEventListener("click", clearDisplay);

let plusSetter = document.querySelector("#plus"); 
plusSetter.addEventListener("click", checkFunction);

let equalsSetter = document.querySelector("#equal");
equalsSetter.addEventListener("click", equals);
