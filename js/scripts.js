const keyApi = "79cba465ccca45181e0cd9cd1cb50931";

const inputDado = document.querySelector('.input-dado');
const btnBusca = document.querySelector('.btn-busca');
const cidade = document.querySelector('.cidade');
const temperatura = document.querySelector('.temp');
const imgCondicao = document.querySelector('.img-condicao');
const condicao = document.querySelector('.condicao');
const umidade = document.querySelector('.umidade');

btnBusca.addEventListener('click', (e) => {
    const cidadeDigitada = inputDado.value;
    
    buscarCidade(cidadeDigitada);
})

async function buscarCidade(cidadeDigitada) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidadeDigitada}&appid=${keyApi}&lang=pt_br&units=metric`)
    .then(response => response.json());

    dadosNaTela(dados);
}

function dadosNaTela(dados) {
    cidade.innerHTML = "Tempo em " + dados.name;
    temperatura.innerHTML = parseInt(dados.main.temp) + "°C";
    condicao.innerHTML = dados.weather[0].description;
    umidade.innerHTML = "Umidade: " + dados.main.humidity + "%";
    imgCondicao.src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}




// function dadosNaTela(dados) {
//     document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name;
//     document.querySelector('.temp').innerHTML = parseInt(dados.main.temp) + "°C";
//     document.querySelector('.condicao').innerHTML = dados.weather[0].description;
//     document.querySelector('.umidade').innerHTML = "Umidade: " + dados.main.humidity + "%";
//     document.querySelector('.img-condicao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
// }

// async function buscarCidade(cidade) {
//     const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${keyApi}&lang=pt_br&units=metric`).then(response => response.json());

//     dadosNaTela(dados);
// }

// function cliqueiNoBotao() {
//     const cidade = document.querySelector(".input-dado").value;
    
//     buscarCidade(cidade);
// }
