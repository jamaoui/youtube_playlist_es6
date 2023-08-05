//const sum = (...numbers) => numbers.reduce((n,value)=> n+value)
const sum = (a,b) => a+b

setTimeout(() => {
//    console.log(sum(1,2))
}, 3000);

// Promises ( producing code + consuming code)
const count = false

let countFunction = function(resolve,reject) {
    // tickets.com

    // PENDING
        if(count === true) {
            resolve('yes') //  FULFILLED
        }else {
            reject('no') // REJECTED
        }
    
}

let countValue = new Promise(countFunction)

countValue
.then(_ => console.log(_))
.catch(_ => console.log(_))


console.log(countValue)