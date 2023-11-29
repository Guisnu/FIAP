const numero1 = document.querySelector('#numero1');
const numero2 = document.querySelector('#numero2');

const somarBt = document.querySelector('#somar');
const multiplicarBt = document.querySelector('#multiplicar');
const subtrairBt = document.querySelector('#subtrair');
const dividirBt = document.querySelector('#dividir');

const resultado = document.querySelector('#resultado');

const form = document.querySelector('#Calculadora');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (numero1.value === "" || numero2.value === "") {
        resultado.textContent = "Dados em branco, favor digitar algo!"
    }
})

somarBt.addEventListener('click', somar)
multiplicarBt.addEventListener('click', multiplicar)
subtrairBt.addEventListener('click', subtrair)
dividirBt.addEventListener('click', dividir)

function somar() {
    let value1 = numero1.value
    let value2 = numero2.value
    const soma = parseInt(value1) + parseInt(value2)
    resultado.textContent = soma
}
function multiplicar() {
    let value1 = numero1.value
    let value2 = numero2.value
    const soma = parseInt(value1) * parseInt(value2)
    resultado.textContent = soma
}
function subtrair() {
    let value1 = numero1.value
    let value2 = numero2.value
    const soma = parseInt(value1) - parseInt(value2)
    resultado.textContent = soma
}
function dividir() {
    let value1 = numero1.value
    let value2 = numero2.value
    if (value2 === "0") {
        resultado.textContent = "Não há divisão por zero!"
    }
    else {
        const soma = parseInt(value1) / parseInt(value2)
        resultado.textContent = soma.toFixed(2)
    }
}
