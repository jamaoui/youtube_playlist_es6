let countries = ['Maroc','Egypte','Tunisie','Maroc']

let set = new Set()
set.add('Maroc')
set.add('Egypte')
set.add('Tunisie')
set.add('Maroc')
set.add('France')

//console.log(set.has('France'))
//console.log(set.size)
set.clear()
console.log(set.delete('France'))