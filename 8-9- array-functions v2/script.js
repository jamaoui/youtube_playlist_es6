const fruits = ['Banana','Apple', 'Berries', 'Orange']
//Affichage des tableaux
const display = function(fruit,key) {
    //console.log(`${key} : ${fruit}`)
}


fruits.forEach(display)

for(let i=0; i<fruits.length;i++) {
    //console.log(`${i} : ${fruits[i]}`)
}

for(let [key,fruit] of fruits.entries()) {
    //console.log(`${key} : ${fruit}`)
}


//

let numbers = [0,1,2,3,4,5,6]
/*numbers = numbers.map(function(value) {
    //return value -1
})*/
//console.log(numbers)


/*numbers = numbers.filter(function(value) {
    return value >= 3
})*/

/*numbers = numbers.some(function(value) {
    return value >=7
})*/

let everyNumbers = [0,1,2,3,4,5,6]
/*everyNumbers = everyNumbers.every(function(value) {
    return value >=0
})*/


let fillNumbers = [1,2,3,4,5,6,7]
fillNumbers = fillNumbers.fill(0,2,5)
//console.log(fillNumbers)


let reduceNumbers = [1,2,3]
let sum = reduceNumbers.reduce(function(accumulator,value) {
    return accumulator*value
},1)

function restFunction(...numbers) {
    let n = 0
    for(number of numbers) {
        n+=number
    }
    return n
}
console.log(restFunction(1,1,1,2,3,4))