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

const claroescuro = document.getElementById('claroEscuro')
const body = document.querySelector('body')
const header = document.querySelector('header')
const aside = document.querySelector('aside')
const footer = document.querySelector('footer')

function alterarModo() {
claroescuro.addEventListener ('click', ()=>{
body.classList.toggle("bodyClaro");
header.classList.toggle("headerClaro");
aside.classList.toggle("asideClaro");
footer.classList.toggle("footerClaro");
});
}

alterarModo()

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
        
        if(altura == 0 && peso == 0){
            return("valores invalidos")
        }
        
        else if( peso == 0){
            return("peso invalido")
        }
        
        else if(altura == 0){
            return("altura invalida")
        }

        else{
            let imc = peso / altura ** 2;
            return(imc.toFixed(1))
        }

}

function classificarIMC(imc, genero){
    if(genero == "masculino"){
        if(imc < 18.5){
            return("Abaixo do peso")
        }
        if(imc < 24.9){
            return("Peso Normal")
        }
        if(imc < 29.9){
            return("Sobrepeso")
        }
        if(imc >= 30.0){
            return("obesidade")
        }
    }
    if(genero == "feminino"){
        if(imc < 18.5){
            return("Abaixo do peso")
        }
        if(imc < 23.9){
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

const moeda1 = document.getElementById('moeda1')
const moeda2 = document.getElementById('moeda2')
const formMoedas = document.getElementById('formMoedas')
const valorDigitado = document.getElementById('inserirmoeda1') 


formMoedas.addEventListener('submit', (evento) => {
    evento.preventDefault()
    consultarCep(moeda1.value, moeda2.value, valorDigitado.value)
})


    async function consultarCep(moeda1, moeda2, valorDigitado) {
        const url = await (await fetch(`https://economia.awesomeapi.com.br/json/last/${moeda1}-${moeda2}`)).json()
        let chaveMoeda = `${moeda1}${moeda2}`
        let bid = url[chaveMoeda].bid;
        let resultado = calcularValor(bid, valorDigitado)
        exibirvalor(resultado)
    }

    function calcularValor(bid, valorDigitado){
        let valor = bid * valorDigitado;
        return(valor.toFixed(2))
    }

    function exibirvalor(resultado){
        const valor = document.getElementById('valor')

        valor.textContent = `R$${resultado}`
    }

const formRegra = document.getElementById('formRegra')
const valorA = document.getElementById('valor1')
const valorB = document.getElementById('valor2')
const valorC = document.getElementById('valor3')

formRegra.addEventListener('submit', (evento) =>{
    evento.preventDefault()

    let resultadoX = calcularX(valorA.value, valorB.value, valorC.value)
    inserirResultadoX(resultadoX)
})

function calcularX(valorA, valorB, valorC){
    if(valorA == 0 && valorB == 0 && valorC ==0){
        return("valores invalidos")
    }
    else if (valorA == 0){
        return("valor 1 não pode ser zero")
    }
    else if (valorB == 0){
        return("valor 2 não pode ser zero")
    }
    else if (valorC == 0){
        return("valor 3 não pode ser zero")
    }
    else{
        let resultado = valorB * valorC / valorA
        return(resultado.toFixed(2))
    }
}

function inserirResultadoX(resultado){
    const resultadodisplay = document.getElementById('resultadoRegra')

    resultadodisplay.textContent = resultado
}

const formTemperatura = document.getElementById('formTemperatura')
const temperatura = document.getElementById('temperatura')
const classe = document.getElementById('classe')

formTemperatura.addEventListener('submit', (evento) => {
    evento.preventDefault()

    let resultadoTemperatura = calcularTemperatura(classe.value, temperatura.value)
    adicionarTemperatura(resultadoTemperatura)
})

function calcularTemperatura(classe, temperatura){
    if(classe == "c"){
        let resultado = temperatura * 1.8 + 32
        return(resultado.toFixed(2))
    }
    else if (classe == "f"){
        let resultado = temperatura - 32 / 1.8
        return(resultado.toFixed(2))
    }
}

function adicionarTemperatura(resultadoTemperatura){
    const caixaResultado = document.getElementById('resultadoTemperatura')

    caixaResultado.textContent = resultadoTemperatura
}

const formVelocidade = document.getElementById('formVelocidade')
const velocidade = document.getElementById('velocidade')
const classeVelocidade = document.getElementById('classeVelocidade')

formVelocidade.addEventListener('submit', (evento) => {
    evento.preventDefault()

    let resultadoVelocidade = calcularVelocidade(classeVelocidade.value, velocidade.value)
    adicionarVelocidade(resultadoVelocidade)
})

function calcularVelocidade(classe, velocidade){
    if(classe == "km/h"){
        let resultado = velocidade *  0.621371
        return(resultado.toFixed(0))
    }
    else if (classe == "mph"){
        let resultado = velocidade /  0.621371
        return(resultado.toFixed(0))
    }
}

function adicionarVelocidade(resultadoVelocidade){
    const caixaResultado = document.getElementById('resultadoVelocidade')

    caixaResultado.textContent = resultadoVelocidade
}

const formMassa = document.getElementById('formMassa')
const massa = document.getElementById('massa')
const classeMassa = document.getElementById('classeMassa')

formMassa.addEventListener('submit', (evento) => {
    evento.preventDefault()

    let resultadoMassa = calcularVelocidade(classeMassa.value, massa.value)
    adicionarVelocidade(resultadoMassa)
})

function calcularVelocidade(classe, massa){
    if(classe == "kg"){
        let resultado = massa *  2.20462
        return(resultado.toFixed(1))
    }
    else if (classe == "lbs"){
        let resultado = massa /  2.20462
        return(resultado.toFixed(1))
    }
}

function adicionarVelocidade(resultadoMassa){
    const caixaResultado = document.getElementById('resultadoMassa')

    caixaResultado.textContent = resultadoMassa
}