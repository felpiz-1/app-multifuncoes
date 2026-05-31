const buttons = document.querySelector("#pai-buttons")

buttons.addEventListener('click', (evento) =>{
    evento.preventDefault();
    
    const puxarhref = evento.target.getAttribute('href')
    const secaoId = document.querySelector(puxarhref)
    if(secaoId){
        const desativasecao = document.querySelector('.ativo')
        if(desativasecao){
            desativasecao.classList.remove('ativo')
            desativasecao.classList.add('card')
        }
        secaoId.classList.remove('card')
        secaoId.classList.add('ativo')
        }

})

