// Challenge 1:
let teas = ['green tea', 'black tea', 'chai', 'oolong tea']
let selectedTeas = []
for (let i=0;i<teas.length;i++){
    if (teas[i] === 'chai'){
        break
    }
    selectedTeas.push(teas[i])
}
console.log(selectedTeas)

// Challenge 2:
let cities = ['London', 'New York', 'Paris', 'Berlin']
let visitedCities = []

for (let i=0;i<cities.length;i++){
    if(cities[i] === 'Paris'){
        continue
    }
    visitedCities.push(cities[i])
}
console.log(visitedCities)

// Challenge 3:
let numbers = [1, 2, 3, 4, 5]
let smallNumbers = []
for (const num of numbers) {
    if(num === 4){
        break
    }
    smallNumbers.push(num)
}
console.log(smallNumbers)

// Challenge 4:
let teaTypes = ['chai', 'green tea', 'herbal tea', 'black tea']
let preferredTeas = []
for(const tea of teaTypes){
    if(tea === 'herbal tea'){
        continue
    }
    preferredTeas.push(tea)
}

// Challenge 5:
let citiesPopulation = {
    'London':8900000,
    'New York':8400000,
    'Paris':2200000,
    'Berlin':3500000
}
let cityNewPopulation = {}
console.log(Object.keys(citiesPopulation))

for(const city in citiesPopulation){
    if(city === 'berlin'){
        break
    }
    cityNewPopulation[city] = citiesPopulation[city]
}
console.log(cityNewPopulation)

// Challenge 6:
let worldCities = {
    Sydney:5000000,
    Tokyo:9000000,
    Berlin:35000000,
    Paris:2200000
}
let largeCities = {}
for (const city in worldCities) {
    if(worldCities[city] < 3000000){
        continue
    }
    largeCities[city] = worldCities[city]
}

// Challenge 7:
let teaCollection = ['earl grey', 'green tea', 'chai', 'oolong tea']
let availableTeas = []

teaCollection.forEach(function(tea){
    if(tea === 'chai'){
        return
    }
    availableTeas.push(tea)
})
console.log(availableTeas)

// Challenge 8:
let worldCities8 = ['Berlin', 'Tokyo', 'Sydney', 'Paris']
let traveledCities = []
worldCities8.forEach(city =>{
    if(city === 'sydney'){
        return
    }
    traveledCities.push(city)
})

// Challenge 9:
let numbers9 = [2, 5, 7, 9]
let doubledNumbers = []
for(let i=0;i<numbers9.length;i++){
    if(numbers9[i] === 7){
        continue
    }
    doubledNumbers.push(numbers[i]*2)
}

// Challenge 10:
let teas10 = ['chai', 'green tea', 'black tea', 'jasmine tea', 'herbal tea']
let shortTeas = []
for(const tea of teas10){
    if(tea.length > 10){
        break
    }
    shortTeas.push(tea)
}
