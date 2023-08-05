import Etudiant from "./etudiant.js";

let filterBySettings = {
    'column': 'id',
    'desc': true,
}
let isFirstLoad = true
const displayEtudiants = async function() {
    return Etudiant.allEtudiants().then(function(response){
        response.sort((a,b) => {
            const isNumber = typeof a[filterBySettings.column] === 'number'

            // SORT NUMBERS
            if(isNumber) {
                if(filterBySettings.desc) {
                    return b[filterBySettings.column] - (a[filterBySettings.column])
                }
             
                return a[filterBySettings.column] - (b[filterBySettings.column])  
            }

            // SORT STRINGS
            if(filterBySettings.desc) {
                return b[filterBySettings.column].localeCompare(a[filterBySettings.column])
            }
         
            return a[filterBySettings.column].localeCompare(b[filterBySettings.column])
        })

        return response.map((data) => {
            const {id,name,date,note} = data
            const etudiant = new Etudiant(name,date,note)
            
            return `<tr>
                    <td>${id}</td>
                    <td>${etudiant.name}</td>
                    <td>${etudiant.getAge()} ans</td>
                    <td><span class="badge rounded-pill ${etudiant.isAdmitted()?'text-bg-success':'text-bg-danger'} ">${etudiant.note} / ${Etudiant.MAX_NOTE}</span> </td>
                    <td><button  class='btn btn-danger btn-sm delete' data-id='${id}'>Supprimer</button></td>
                </tr> `
        })
    })
}
const addEtudiant = (event) => {
    event.preventDefault()
    const [name,date,note] = document.querySelectorAll('#name,#date,#note')
    const etudiant = new Etudiant(name.value,date.value,note.value)
    etudiant.addEtudiant()
}
window.deleteEtudiant = (id) => {
    Etudiant.deleteEtudiant(id)
}
const renderEtudiants = function() {
    const body = document.querySelector('.liste-etudiants')
    displayEtudiants().then((data) => {
        body.innerHTML = data.join(' ')
        if(isFirstLoad) {
            init()
        }
        isFirstLoad = false
        
    })
}

const init = function() {
    const refreshButton = document.querySelector('#refresh')
    const addButton = document.querySelector('#add')
    const deleteHtmlButtons = document.querySelectorAll('.delete')
    const sortElementHtmlButtons = document.querySelectorAll('.sort-element')
    
    refreshButton.addEventListener('click', () => {
        renderEtudiants()
    })    
    addButton.addEventListener('click', (event) => {
        addEtudiant(event)
    })
    deleteHtmlButtons.forEach((button) => {
        button.addEventListener('click',() => {
            window.deleteEtudiant(button.dataset.id)
        })
    })
    sortElementHtmlButtons.forEach((button) => {
        button.addEventListener('click',() => {
            filterBySettings.column = button.dataset.column
            toggleSortDirection()
        })
    })
}

window.renderSort = (column) => {
    if(filterBySettings.column === column){
        const element = document.querySelector('.sort-element[data-column="'+column+'"] span')
        element.innerHTML = `<button class='btn fw-bold'>${filterBySettings.desc?'&darr;':'&uarr;'}</button>`
    }
}

renderSort('id')
renderSort('name')
renderSort('date')
renderSort('note')
window.clearSortIcons = () => {
    document.querySelectorAll('.sort-element span').forEach(span => {
        span.innerHTML = ''
    })
}
window.toggleSortDirection = () => {
    clearSortIcons()
    filterBySettings.desc = !filterBySettings.desc
    renderSort(filterBySettings.column)

    renderEtudiants()
}

renderEtudiants()