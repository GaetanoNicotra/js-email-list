
axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((element) => {
    console.log(element.data.response)
})