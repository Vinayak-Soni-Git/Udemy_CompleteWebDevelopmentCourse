export function add(a, b){
    return a+b
}

export function subtract(a, b){
    return a-b
}

export default function multiply(a, b){
    return a*b
}


// named export
function add2(a, b){
    return a+b
}

function subtract2(a, b){
    return a-b
}

module.exports = {
    add2,
    subtract2
}
