function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    }
    else {
        alert('Elemento não encontrado ou seletor inválido')
    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla')

for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = (e) => {
        tocaSom(idAudio)
    }

    tecla.addEventListener('mousedown', () => {
        tecla.classList.add('ativa')
    })
    tecla.addEventListener('mouseup', () => {
        tecla.classList.remove('ativa')
    })
}

for (let contador = 0; contador < ListaDeTeclas.length; contador++) {
    const tecla = ListaDeTeclas[contador];

    tecla.onkeydown = (evento) => {
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup = () => {
        tecla.classList.remove('ativa')
    }
}
