import { ENDPOINT } from "./constants.js"
export default class Etudiant {
    static MAX_NOTE = 20
    constructor(name,age,note) {
        this.name = name
        this.age = age
        this.note = note
    }
    getAge = () => ((new Date()).getFullYear()  - new Date(this.age).getFullYear())
    isAdmitted = () => this.note >= 10
    static allEtudiants = async function() {
        const response  = await fetch(ENDPOINT)
        const etudiants = await response.json()

        return etudiants
    }
    // http://localhost:3000/etudiants (POST) AJOUTER
    addEtudiant = async function() {
        const response  = await fetch(ENDPOINT,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.name,
                date: this.age,
                note: parseFloat(this.note)
            })
        })

        return response
    }
    // http://localhost:3000/etudiants/{id} (DELETE) SUPPRIMER
    static deleteEtudiant = async function (id) { 
        const response  = await fetch(ENDPOINT+'/'+id,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        return response
    }
}
