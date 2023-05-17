//Pom ----------------------------------------------
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

const listaTeclas = document.querySelector('.tecla');

let cont = 0
//enequanto
while (cont = listaTeclas.lenght){
    listaTeclas[0].onclick = tocaSomPom;
    cont++;
}