// recupero gli elementi dal dom

const list = document.getElementById('list');
const listElement = document.querySelector('.list-element')

// creo un ciclo for per generare 10 mail randomiche
for (let i = 0; i <= 10; i++) {
    // utilizzo il linguaggio axios per recuperare le mail random dall'apposita API
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(element => {
        console.log(element.data.response)
        // genero all'interno del DOM gli elementi della <ul>
        elementoGenerato = element.data.response;
        list.innerHTML += `<li class="list-element">${elementoGenerato}</li>`;
    })
}