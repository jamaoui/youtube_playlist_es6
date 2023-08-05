const getProduct = async function(id) {
    let result =  await fetch('https://fakestoreapi.com/products/'+id)
    .then((res) => res.json())
    .then((product) => product)

    console.log('loaded')
    return result
}

console.log(getProduct(3).then(value => console.log(value)))