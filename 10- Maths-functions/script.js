
function execute() {
    let number = document.querySelector('#number').value
    //let result = Math.trunc(number);
    // -5 => -1
    // 3  => 1
    // 0  => 0
    //let result = Math.sign(number);
    // 8 => 2*2*2 => 2
    //let result = Math.cbrt(number);
    //let result = Math.log(number);
    let result = number ** 3 // Math.pow(number,3);

    document.querySelector('#number').value = ''
    document.querySelector('#result').value = result
}


