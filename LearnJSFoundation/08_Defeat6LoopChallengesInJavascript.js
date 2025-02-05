// Challenge 1:
let countDown = []
let j = 5
while(j > 0){
    countDown.push(j)
    j--
}
console.log(countDown)

// Challenge 2:
// let teaCollection = []
// let tea
// do {
//     prompt(`Enter your favourite tea (type "stop" to finish)`)
//     if(tea !== 'stop'){
//         teaCollection.push(tea)
//     }
// }while(tea !== 'stop')

// Challenge 3:
let total = 0
let k = 1
do{
    total += k
    k++
}while(k<=3)
console.log(total)

// Challenge 4:
let multipliedNumbers = []
let numbers = [2, 4, 6]
for(let l = 0;l < numbers.length;l++){
    // takeNumber = numbers[l]*2
    // multipliedNumbers.push(takeNumber)
    multipliedNumbers.push(numbers[l]*2)
}
console.log(multipliedNumbers)

// Challenge 5:
let cities = ['paris', 'new york', 'tokyo', 'london']
let cityList = []
for (let c = 0;c<cities.length;c++){
    const myCity = cities[c]
    cityList.push(myCity)
}
console.log(cityList)
