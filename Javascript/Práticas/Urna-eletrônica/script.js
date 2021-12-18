let seuVotoPara = document.querySelector('.part1 span')
let cargo = document.querySelector('.part2 span')
let descricao = document.querySelector('.part4')
let aviso = document.querySelector('.d-2')
let banner = document.querySelector('.d-1-right')
let numero = document.querySelector('.part3')
let clicks = 0;
let indice = 1;
const botoes = document.querySelectorAll('.buttons')

let etapaAtual = 0;


function tecla(tecla){

}

function comecarEtapa(){
    let etapa = candidatos[etapaAtual]
    let numeroHtml = ''

    for(let i=0; i<etapa.numeros; i++){
        numeroHtml += '<div class="num"></div>';
    }

    seuVotoPara.style.display = 'none'
    cargo.innerHTML = toUpperCase(etapa.titulo)
    descricao.innerHTML = ''
    aviso.style.display = 'none'
    banner.innerHTML = ''
    numero.innerHTML = numeroHtml;
}

comecarEtapa()

// function tecla(teclaDigitada){

//     if(teclaDigitada == 'corrige'){
//         limpaNum()
//     }else{
//         imprimeNum(teclaDigitada)
//     }
// }

// function imprimeNum(tecla){
    

//     if(numero[clicks] !== ''){
//         numero[clicks].classList.remove('pisca')
//         numero[clicks].innerText = tecla
//         clicks++
//         // numero[clicks].classList.add('pisca')
//     }else if(numero[clicks] == ''){
//         numero[clicks].classList.add('pisca')
//     }


//     clicks > 2 ? clicks=0 : clicks=clicks
// }


// function limpaNum(){
    
//     if(numero[indice] !== ''){
//         numero[indice].innerText = ""
//     }else{
//         numero[indice-1].innerText = ""
//     }
    
//     indice--;
//     indice < 0 ? indice=1 : indice=indice
// }