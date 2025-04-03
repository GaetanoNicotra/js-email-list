// recupero gli elementi dal dom

const list = document.getElementById('list');
const listElement = document.querySelector('.list-element')

// utilizzo il linguaggio axios per recuperare le mail random dall'apposita API
 for (let i = 0; i <= 10; i++) {
axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(element => {

    console.log(element.data.response)
    
    ciao = element.data.response;
   
        list.innerHTML += `<li class="list-element">${ciao}</li>`;
})
}