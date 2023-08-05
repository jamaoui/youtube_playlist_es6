const countries = ['Maroc','Egypte','Tunisie','Ghana','Sénegal']
//console.log(...countries)

const [b,,...rest] = countries

const fruit = {id:1,name:'apple',weight:1}
let {weight,name,color = 'red',...restObj} = fruit
console.log(color)
