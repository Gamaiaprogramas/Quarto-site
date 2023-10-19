const numero1 = document.querySelector('#idnumero1');
const numero2 = document.querySelector('#idnumero2');
const pontuacao = document.querySelector('#idpontos');
const resposta = document.querySelector('#idresposta');
const nome = document.querySelector('#Nomes');
const mensagem = document.querySelector('#primeiro');
const rank = document.querySelector('#ranking');
const plac = document.querySelector('#tempo-form')
var tempo;
var duration;
var minutos;
var segundos;
var correta =0;
var pontos = 0;
var i = 0 ;
var seila = 0;
var fim = 0; 


document.addEventListener("DOMContentLoaded", function() {
    const inputElement = document.getElementById("meuInput");
    const buttonElement = document.getElementById("meuBotao");
    const tempoForm = document.getElementById("tempo-form");
    let contador = 0;
    let timer;
    
  
    function iniciarTimer(tempo) {
      contador = 0;
      inputElement.value = contador;
      buttonElement.disabled = true;
      tempoForm.querySelectorAll("input[type=radio]").forEach(function(radio) {
        radio.disabled = true;
        nome.disabled=true;
        seila = 1;
        
      });
  
      timer = setInterval(function() {
        contador++;
  
        if (contador <= tempo) {

          inputElement.value = contador;
          
        } else {
          clearInterval(timer);
          buttonElement.disabled = false;
          tempoForm.querySelectorAll("input[type=radio]").forEach(function(radio) {
            fim = 1;
            radio.disabled = false;
            nome.disabled= false;
            mensagem.value = "1º lugar foi de " + nome.value + " com a pontuação de " + pontos;
            
            
          }
          );
        }
      }, 300);
      
    }
    buttonElement.addEventListener("click", function() {
      const tempoSelecionado = tempoForm.querySelector("input[type=radio]:checked").value;
      iniciarTimer(Number(tempoSelecionado));
    } );
});
   
function sorteio(){
    top1 = Math.ceil(Math.random()*10);
    numero1.value = top1;
    top2 = Math.ceil(Math.random()*10);
    numero2.value = top2;
    correta = top1*top2; 
    console.log(correta);
}
function verifica(){
   if(seila == 0){
    verifica().disabled= true;
   }
   if(fim == 1){
    verifica().disabled= true;
    
   }
   if(resposta.value != ""){
    if(resposta.value == correta){ 
        pontos++;
        pontuacao.value = "pontos: " +pontos;
        pontuacao.classList.add('correto');
        pontuacao.classList.remove('errado');
    }else{
        pontos--;
        pontuacao.value = "pontos: "+pontos;
        pontuacao.classList.add('errado');
        pontuacao.classList.remove('correto'); 
     }
     iniciar();


   }
   
}
function botoes(){
  rank.classList.add('butrank');
  rank.classList.remove('rank');
}
function voltar(){
  rank.classList.remove('butrank');
  rank.classList.add('rank');
}

function botoes2(){
  plac.classList.add('butplacar');
  plac.classList.remove('placar');
}
function voltar2(){
  plac.classList.remove('butplacar');
  plac.classList.add('placar');
}

function iniciar(){
    resposta.value = "";
    sorteio();
    resposta.focus();
}
document.addEventListener('keyup', (Event)=>{
    if(event.key == "Enter"){
        verifica();
    }

}) ;










iniciar();

sorteio();
