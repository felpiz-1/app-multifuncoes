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

const form = document.getElementById('form')
const button = document.getElementById('buttonIMC')
// const genero = document.querySelectorAll(".genero")

function puxarValores(){
    form.addEventListener('submit', (evento) => {
        evento.preventDefault();
        
    })
    button.addEventListener('click', (evento) =>{
        const altura = document.getElementById('altura').value/100
        const peso = document.getElementById('peso').value
        const genero = document.querySelector('input[name=genero]:checked').id;

       let resultadoIMC = calcularIMC(peso, altura, genero)
       let classificacaoImc = classificarIMC(resultadoIMC, genero)
       exibirImc(classificacaoImc, resultadoIMC)
    });

}
    function calcularIMC(peso, altura){
     let imc = peso / altura ** 2;

     return(imc.toFixed(1))
}

function classificarIMC(imc, genero){
    if(genero = masculino){
        if(imc < 18.5){
            return("Abaixo do peso")
        }
        else if(imc < 24.9){
            return("Peso Normal")
        }
        if(imc < 29.9){
            return("Sobrepeso")
        }
        if(imc >= 30.0){
            return("obesidade")
        }
    }
    if(genero = feminino){
        if(imc < 18.5){
            return("Abaixo do peso")
        }
        else if(imc < 23.9){
            return("Peso Normal")
        }
        if(imc < 28.9){
            return("Sobrepeso")
        }
        if(imc >= 29.0){
            return("obesidade")
        }
    }
}

function exibirImc(classificacaoImc, resultadoIMC){
    const imc = document.getElementById("imc")
    const tipoImc = document.getElementById("tipoImc")

    imc.textContent = resultadoIMC
    tipoImc.textContent = classificacaoImc
}

puxarValores()

