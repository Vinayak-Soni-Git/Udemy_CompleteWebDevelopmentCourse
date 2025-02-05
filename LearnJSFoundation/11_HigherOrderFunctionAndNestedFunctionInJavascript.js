function makeTea(typeOfTea){
    return `makeTea: ${typeOfTea}`
}

function processTeaOrder(teaFunction){
    return teaFunction('earl grey')
}
let order = processTeaOrder(makeTea)
console.log(order)

function createTeaMaker(){
    return function (teaType){
        return `making ${teaType}`
    }
}

let teaMaker = createTeaMaker()
console.log(teaMaker('green tea'))
