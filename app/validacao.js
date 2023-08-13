function verificaSeOChutePossuiValorValido(chute) {
    if (chute == "game over") {
        console.log("caiu no if");
        
        document.body.classList.add("game-over");

        document.body.innerHTML = `
        <h2>Game Over!</h2>
        <h3>Você encerrou o jogo</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        recognition.addEventListener('end', () => recognition.stop());
        return
    } 
    const numero = +chute;

    if (ChuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: É necessário dizer um número entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto está entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if (numero === numeroSecreto) {
        
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
        recognition.addEventListener('end', () => recognition.stop());
        return
    } 
   else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function ChuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})