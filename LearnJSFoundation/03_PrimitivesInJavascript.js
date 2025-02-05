let balance = 120
console.log(typeof(balance))
console.log(typeof balance)

let anotherBalance = new Number(120)
console.log(anotherBalance)
console.log(anotherBalance.valueOf())
console.log(typeof anotherBalance)
console.log(typeof anotherBalance.valueOf())

// Boolean
let isActive = true
let isReallyActive = new Boolean(true)

// null
let firstName = undefined
let secondName = null
console.log(secondName)
console.log(firstName)

// String
let myString = "hello"
let myStringOne = 'Hola'
let userName = 'hitesh'

let oldGreet = myString + " hitesh"
console.log(oldGreet)
let greetMessage = `Hello ${userName}!`
console.log(greetMessage)

let symbol = Symbol("hitesh")
let symbolTwo = Symbol()

