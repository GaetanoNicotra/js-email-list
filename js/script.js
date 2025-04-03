// recupero gli elementi dal dom

const list = document.getElementById('list');
const listElement = document.querySelector('.list-element')
const button = document.getElementById('button')

// creo una funzione per generare al click del bottone 10 nuove mail
const generateNewMail = () => {
    list.innerHTML = '';
    // creo un ciclo for per generare 10 mail randomiche
    for (let i = 0; i < 10; i++) {
        // utilizzo il linguaggio axios per recuperare le mail random dall'apposita API
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(element => {
            console.log(element.data.response)
            // genero all'interno del DOM gli elementi della <ul>
            elementoGenerato = element.data.response;
            list.innerHTML += `<li class="list-element">${elementoGenerato}</li>`;
        })
    }
}
// creo l'evento da verificarsi al click
button.addEventListener('click', generateNewMail);
generateNewMail()
