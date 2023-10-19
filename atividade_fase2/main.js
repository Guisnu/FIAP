// Solicita o nome do usuário
function solicitarNome() {
    let nomeCompleto = "";
    while (nomeCompleto.trim() === "") {
        nomeCompleto = prompt("Por favor, digite seu nome completo:");
        if (nomeCompleto.trim() === "") {
            alert("Você deve digitar um nome para continuar.");
        }
    }
    return nomeCompleto;
}

// Agradecimento com o primeiro nome do usuário
function agradecerUsuario(nomeCompleto) {
    const nomeArray = nomeCompleto.split(" ");
    const primeiroNome = nomeArray[0];
    alert(`${primeiroNome}, obrigado por acessar nosso site!`);
}

const nomeCompleto = solicitarNome();
agradecerUsuario(nomeCompleto);