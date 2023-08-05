/*function somme(a,b) {
    return a+b
}*/

const somme = function(a = 0,b = 0) {
    return a+b
}

const sum = (a= 0,b=0) =>  a+b
const sum3 = (a= 0,b=0, c=0) =>  a+b+c
const sumRest = (...numbers) => {
    let somme = 0
    for(let i=0;i<numbers.length;i++){
        let n = numbers[i]
        somme+= n
    }
    return somme
}

//const display = (age=15) => age

document.write(sumRest(99,1,2,3,4,5,12))