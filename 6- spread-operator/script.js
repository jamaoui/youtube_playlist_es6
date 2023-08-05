const countries = ['Maroc', 'Algérie', 'Tunisie','Egypte']

const countries2 = ['Maroc', 'Canada', 'Brazil']

//console.table([...countries])
//console.table([...countries2])
// Array merge (concat)
//console.table([...countries,...countries2])

const fruit = {
    name: 'apple',
    color: 'red',
    price: 3
}
const fruit2 = {
    'name': 'apple',
    color: 'green',
    weight: 0.5
}
console.log({...fruit})
console.log(fruit2)


console.log({...fruit, ...fruit2})