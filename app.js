const buttons = document.querySelector("#pai-buttons")

buttons.addEventListener('click', (evento) =>{
    evento.preventDefault();
    
    const puxarhref = evento.target.getAttribute('href')
    const secaoId = document.querySelector(puxarhref)
    if(secaoId){
        if(secaoId.classList.contains('.ativo')){
            secaoId.classList.remove('ativo')
            secaoId.classList.add('card')
        }
        const desativasecao = document.querySelector('.ativo')
        if(desativasecao){
            desativasecao.classList.remove('ativo')
            desativasecao.classList.add('card')
        }
        secaoId.classList.remove('card')
        secaoId.classList.add("ativo")
        }

})

const elementoImc = {
    genero: document.querySelectorAll('.genero'),
    form: document.getElementById('form')
}
     console.log(elementoImc.genero)

elementoImc.genero.addEventListener('click', (evento) => {
    puxarGenero
})

elementoImc.form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    console.log(elementoImc.genero.value)
})