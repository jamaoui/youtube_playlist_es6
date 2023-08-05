export class User {
    static #counter = 1
    #id = 1
    constructor(name,age) {
        this.name = name
        this.age  = age
        this.#id  = User.#counter++
    }

    displayUser() {
        return `Hi my name's ${this.name} , i've ${this.displayAge()}`
    }
    getId = () => this.#id
    
    displayAge = () => `${this.age} years olds`
}

export class Admin extends User {
    isAdmin = true
}