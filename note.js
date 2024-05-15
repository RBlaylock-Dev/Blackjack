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

//Arrays are used as a data structure

let featuredPosts = [
    "Check out my Netflix clone",
 "Heres the code for my project",
  "I've relaunched my portfolio"
]

let attributes = [ 
    "I have HTML, CSS, and JS experience previously",
    "I am currently in Classes with Persevere learning full stack development",
    "I have my HTML & CSS Certifications already"
]

let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

console.log(experience[1])
console.log(experience[2])
console.log(experience[0])

// the length property of an array property is always one larger than the index property. 

//Array = ordered list of items - composite/complex data type
// primitave data types are the building blocks of JS
let myself = ["Robert Blaylock", 31, true]

let cards = [7, 4]

cards.push(6)

console.log(cards)
//push method.

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)
console.log(messages)


messages.pop(newMessage)


for ( let count = 10; count < 20; count += 1 ) {
    console.log(count)
}

for (let i = 10; i < 101; i += 10) {
    console.log(i)
}

let cards = [7, 3, 9]\

for( let i = 0; i < cards.length; i += 1) {
    console.log(cards[i])
}

let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
for (let i = 0; i < sentence.length; i += 1) {
    greetingEl.textContent += sentence[i] + " "
}


let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

let fastestRace = getFastestRaceTime()

function totalRaceTime() {
    return player1Time + player2Time
}

let raceTime = totalRaceTime()
console.log(raceTime)

let randomNumber = Math.random()

console.log(randomNumber)


let hasCompletedCourse = true
let givesCertificate = true

if (hasCompletedCourse === true && givesCertificate === true) {
    generateCertificate()
}

if (true && true) {
    generateCertficiate()
}

if (hasCompletedCourse === true){
    if (givesCertificate === true) {
        generateCertificate()
    }
}
function generateCertificate() {
    console.log("Generating certificate....")
}


let hasSolvedChallenge = false
let hasHintsLeft = false
// logical operator
if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}

//or operator 
if (hasSolvedChallenge === false || hasHintsLeft === false) {
    showSolution()
}

funcion showSolution() {
    console.log("Showing the solution....")
}

let likesDocumentaries = true
let likesStartups = false

if (likesDocumentaries === true || likesStartups === true) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like!")
}


let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

//dot notation
console.log( course.length )
console.log( course.tags )

//bracket notation
console.log(course["tags"])


//create an object for an airbnb listing
//contain one boolean, one string, one number, and one array
// log out at least two of the keys using dot notation

let castle = {
    name: "Castle Listing",
    location: "Tennessee"
    available: true,
    bedrooms: 6,
    // you can put images in the arrays as well. 
    features: ["clean", "cheap", "lots of space"]
}

console.log( castle.bedrooms )
console.log( castle.location )


