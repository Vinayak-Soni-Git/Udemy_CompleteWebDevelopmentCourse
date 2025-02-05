function stringToNumber(input) {
    if(Number.parseInt(input)){
        return Number.parseInt(input)
    }else{
        return "Not a number"
    }
}

function flipBoolean(input) {
    return !input
}

function whatAmI(input) {
    if(typeof(input) === "number"){
        return "I'm a number!"
    }else{
        return "I'm a string!"
    }
}

function isItTruthy(input) {
    if(input){
        return "It's truthy!"
    }else{
        return "It's falsey!"
    }
}
