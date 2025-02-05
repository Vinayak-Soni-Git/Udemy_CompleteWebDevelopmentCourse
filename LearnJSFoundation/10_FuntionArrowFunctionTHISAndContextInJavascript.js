function greet(name){
    console.log(`hello ${name}`)
}
greet("Javascript")

function makeTea(typeOfTea){
    return `Making... ${typeOfTea}`
}
let teaOrder = makeTea("lemon tea")
console.log(makeTea("lemon tea"))

function orderTea(teaType){
    function confirmOrder(){
        return "order confirmed for chai"
    }
    return confirmOrder()
}

let orderConfirmation = orderTea("chai")
console.log(orderConfirmation)

// Arrow Functions
const calculateTotal = (price, quantity) => price* quantity

let totalCost = calculateTotal(499*100)
