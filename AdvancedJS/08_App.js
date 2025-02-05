//module import file

// default import
import multiply from "./08_ES6ModulesAndCommonJS";

// named import
import {add, subtract} from './08_ES6ModulesAndCommonJS'

console.log(multiply(2, 2))
console.log(add(2, 2))

const mathOperations = require('./08_ES6ModulesAndCommonJS')

console.log(mathOperations.add2(2, 2))
