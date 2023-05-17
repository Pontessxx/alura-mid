function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio).play();
    if (elemento === null){
        console.log('Elemento não encontrado')
    }
    else if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
};

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    
    //adiciona a classe ativa para o botão ao apertar o enter quando selecionada o buttom
    tecla.onkeydown = function (evento){
        //console.log(evento.code== 'Space')
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa')
        }
    };
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    };
};