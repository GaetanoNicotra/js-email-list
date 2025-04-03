// recupero gli elementi dal dom

const list = document.getElementById('list');
const listElement = document.querySelector('.list-element')

// utilizzo il linguaggio axios per recuperare le mail random dall'apposita API
axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((element) => {
    console.log(element.data.response)
for(let i=0; i<=10; i++){
     listElement.innerHTML = element.data.response;
}
   
})