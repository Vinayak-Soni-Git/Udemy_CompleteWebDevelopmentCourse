// Challenge 1:
let teaFlavors = ['green tea', 'black tea', 'oolong tea']

const firstTea = teaFlavors[0]
console.log(firstTea)

// Challenge 2:
let cities = ['London', 'Tokyo', 'Paris', 'New York']
const favouriteCity = cities[2]
console.log(favouriteCity)

// Challenge 3:
let teaTypes = ['Herbal tea', 'white tea', 'masala tea']
teaTypes[1] = 'jasmine tea'
console.log(teaTypes[1])

// Challenge 4:
let citiesVisited = ['Mumbai', 'Sydney']
citiesVisited.push('berlin')
console.log(citiesVisited)

// Challenge 5:
let teaOrders = ['chai', 'iced tea', 'match', 'earlgrey']
teaOrders.pop()

// Challenge 6:
let popularTeas = ['green tea', 'oolong tea', 'chai']
let softCopyTeas = popularTeas
popularTeas.pop()
console.log(softCopyTeas)
console.log(popularTeas)

// Challenge 7:
let topCities = ['Berlin', 'Singapore', 'New York']
let hardCopyCities = [...topCities]
// let hardCopyCitiesSlice = topCities.slice()
topCities.pop()
console.log(hardCopyCities)

// Challenge 8:
let europeanCities = ['Paris', 'Rome']
let asianCities = ['Tokyo', 'Bangkok']
let worldCities = europeanCities.concat(asianCities)
console.log(worldCities)

// Challenge 9:
let teaMenu = ['Masala chai', 'oolong tea', 'green tea', 'earl grey tea']
let menuLength = teaMenu.length
console.log(menuLength)

let cityBucketList = ['Kyoto', 'London', 'Cape Town', 'Vancouver']
let isLondonInList = cityBucketList.includes('London')
console.log(isLondonInList)
