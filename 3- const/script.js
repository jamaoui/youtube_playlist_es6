const PI = 3.14
//alert(PI)


/* Constantes
1 - Array
2 - Object
3 - Function
4 - RegExp
*/

const countries = ['Maroc', 'Algérie', 'Tunisie']
countries.push('Egypte')
//console.table(countries)


const animal = {
    color: 'black',
    age: 2
}
animal.owner = 'Jamaoui'
animal.type = 'dog'
//animal = {}

const displayAnimal = function (animal){
    document.write(JSON.stringify(animal))
}
displayAnimal(animal)
const reg = new RegExp('/.../')