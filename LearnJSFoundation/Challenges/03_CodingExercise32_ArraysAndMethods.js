function filterNumbers(arr) {
    let numbers = []
    for(const a of arr){
        if(typeof a == 'number'){
            numbers.push(a)
        }
    }
    return numbers;
}

function reverseArray(arr) {
    return arr.reverse()
}

function findMax(arr) {
    let max = -10e6
    for(const a of arr){
        if(a > max){
            max = a

        }
    }
    return max
}

function removeDuplicates(arr) {
    // let newArray = []
    // for(let i=1;i<arr.length;i++){
    //     if(arr[i-1] === arr[i]){

    //     }else{
    //         newArray.push(arr[i])
    //     }
    // }
    // return newArray;
    return [...new Set(arr)]
}

function flattenArray(arr) {
    return arr.flat(Infinity);
}
