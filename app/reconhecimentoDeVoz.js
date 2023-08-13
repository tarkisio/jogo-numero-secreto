const elementoChute = document.getElementById('chute')


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    const chute = palavraParaNumero(e.results[0][0].transcript);
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiValorValido(chute);
}


function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
    `
}

function palavraParaNumero(palavra) {
    const numeros = {
        'zero': '0',
        'um': 1,
        'dois': 2,
        'três': 3,
        'quatro': 4,
        'cinco': 5,
        'seis': 6,
        'sete': 7,
        'oito': 8,
        'nove': 9,
        'dez': 10,
        'mil' : 1000,
        'miu' : 1000
    };
    return numeros[palavra.toLowerCase()] || palavra;
}

recognition.addEventListener('end', () => recognition.start());
