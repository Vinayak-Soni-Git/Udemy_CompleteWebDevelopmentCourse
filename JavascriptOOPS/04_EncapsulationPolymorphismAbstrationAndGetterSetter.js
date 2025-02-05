// Encapsulation
class BankAccount{
    #balance = 0
    deposit(amount){
        this.#balance += amount
        return this.#balance
    }
    getBalance(){
        return `${this.#balance}`
    }
}


let account = new BankAccount()
console.log(account.getBalance())

// Abstraction
class CoffeeMachine{
    start(){
        // call DB
        // filter value
        return `starting the machine...`
    }
    brewCoffee(){
        // complex calculation
        return `Brewing coffee`
    }
    pressStartButton(){
        let msgOne = this.start()
        let msgTwo = this.brewCoffee()
        return `${msgOne} + ${msgTwo}`
    }
}

let myMachine = new CoffeeMachine()
console.log(myMachine.start())
console.log(myMachine.brewCoffee())

// Polymorphism
class Bird{
    fly(){
        return `Flying...`
    }
}

class Penguin extends Bird{
    fly(){
        return `Penguin can't fly`
    }
}

let bird = new Bird()
let penguin = new Penguin()
console.log(bird.fly())
console.log(penguin.fly())

class Calculator{
    static add(a, b){
        return a+b
    }
}

let miniCalculator = new Calculator()
// console.log(miniCalculator.add(2, 8))
console.log(Calculator.add(2, 8))

// Getters and Setters
class Employee{
    #salary
    constructor(name, salary){
        if(salary < 0){
            throw new Error("Salary cannot be in negative")
        }
        this.name = name
        this.#salary = salary
    }
    get salary(){
        return `You are not allowed to see salary`
    }
    set salary(value){
        if(value<0){
            console.log("Invalid salary")
        }else{
            this._salary = value
        }
    }
}

let emp = new Employee("Alice", 50000)
console.log(emp.salary)
