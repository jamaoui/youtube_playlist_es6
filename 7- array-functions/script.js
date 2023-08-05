let str = 'Maroc:Egypte:Tunisie'
const countries  = ['Maroc','Madagascar','Egypte','Tunisie']

//console.log(str.split(':',))
let alphabets = 'ABCDEF'
//console.log(Array.from(alphabets))
const keys = countries.keys()

for(let key of keys){
    //console.log(key)
}

// Search
const index = countries.findIndex(_ => _.startsWith('T'))
console.log(countries.at(index))
