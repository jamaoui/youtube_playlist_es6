let nom ='Jamaoui'
let prenom = 'Mouad'
let age = 20

let isAdult = 'Adulte'
if(age < 18) {
    isAdult = 'Mineur'
}

let str = " \" Bonjour \""
+'<strong>'+prenom+'</strong>'+' \n'
+ nom + ' , ' + isAdult



let newStr = `"Bonjour" <strong>${prenom}</strong> 
${nom} ${(age < 18 ? 'Mineur': 'Adulte').toUpperCase()}`



document.querySelector('#oldStr').innerHTML = str
document.querySelector('#newStr').innerHTML = newStr