// Checking is a number is greater than another one:
let num1 = 5
let num2 = 8

if(num1 > num2){
    console.log(`${num1} is greater than ${num2}`)
}else{
    console.log(`${num2} is greater than ${num1}`)
}

// Checking if a string is equal to another string:
let userName = "chai"
let anotherUserName = "chai"

if(userName == anotherUserName){
    console.log("pick another userName")
}

// Checking if variable is a number or not:
let score = 44
if(typeof score === 'number'){
    console.log("yep this is a number")
}else{
    console.log("not that is not a number")
}

// Checking if a boolean value is true on false
let isTeaReady = true
if(isTeaReady){
    console.log("Tea is ready")
}else{
    console.log("Tea is not ready")
}

// Checking if an array empty or not
let items = []

if(items.length === 0){
    console.log("Array is empty")
}else{
    console.log("Array is not empty")
}
