let sumEl = document.getElementById("sum-el")
document.getElementId("num1-el").textContent = num1
document.getElementId("num2-el").textContent = num2

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}

let age = 22

if (age < 21) {
    console.log("You can not enter the club")
} else (age >= 21) {
    console.log("Welcome!")
}


let age = 100

if (age < 100) {
    console.log("Not elegible")
} else if (age === 100) {
    console.log("Here is your birthday card from the King!")
} else (age > 100) {
    console.log("Not elegible, you have already gotten one")
}