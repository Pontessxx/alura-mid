//Pom ----------------------------------------------
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

const listaTeclas = document.querySelector('.tecla');
listaTeclas[0].onclick = tocaSomPom;
listaTeclas[1].onclick = tocaSomClap;
listaTeclas[2].onclick = tocaSomTim;
listaTeclas[3].onclick = tocaSomPuff;
listaTeclas[4].onclick = tocaSomSplash;
listaTeclas[5].onclick = tocaSomToim;
listaTeclas[6].onclick = tocaSomPsh;
listaTeclas[7].onclick = tocaSomTic;
listaTeclas[8].onclick = tocaSomPom;