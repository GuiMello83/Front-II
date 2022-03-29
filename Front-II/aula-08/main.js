let buttonReference = document.querySelector('#button')
let botaoSomaReferencia = document.querySelector('#somar')
let botaoSubtrairReferencia = document.querySelector('#subtrair')
let botaoMultiplicarReferencia = document.querySelector('#multiplicar')
let botaoDividirReferencia = document.querySelector('#dividir')

botaoSomaReferencia.addEventListener("click", function(event){


})
botaoSubtrairReferencia.addEventListener("click", function(event){

    
})
botaoMultiplicarReferencia.addEventListener("click", function(event){

    
})
botaoDividirReferencia.addEventListener("click", function(event){

    
})

// Função que mostra a mensagem de Sucesso
function mostrarMensagem() {

    mensagemSucessoReference.classList.toggle('show')

}



// Função que mostra a mensagem de Sucesso
function mostrarSugestao() {

    titleHintReference.classList.add('show')

}



// Função que esconde a Sugestão
function esconderSugestao() {

    titleHintReference.classList.remove('show')

}



// Escutando o evento Click
buttonReference.addEventListener('click', function(event) {

    mostrarMensagem()
    event.preventDefault() // vai deixar de recarregar a página ao clicar

})



// Escutando o evento Keyup
titleInputReference.addEventListener('keyup', function(event){
    console.log('digitando...')
})



// Escutando o evento MouseOver
titleInputReference.addEventListener('mouseover', mostrarSugestao)



// Escutando o evento MouseOut
titleInputReference.addEventListener('mouseout', esconderSugestao)

function soma() {
    //alert("1");
    var f=document.getElementById("frm");
    var n1=document.getElementById("n1").value;
    var n2=document.getElementById("n2").value;
    var soma = n1 + n2 ;
    alert(soma);
 }

 function subtracao() {
    var f=document.getElementById("frm");
    var n1=document.getElementById("n1").value;
    var n2=document.getElementById("n2").value;
    var soma = n1 - n2 ;
    alert(soma);
 } 

 function multiplicacao() {
    var f=document.getElementById("frm");
    var n1=document.getElementById("n1").value;
    var n2=document.getElementById("n2").value;
    var soma = n1 * n2 ;
    alert(soma);
 } 

 function divisao() {
    var f=document.getElementById("frm");
    var n1=document.getElementById("n1").value;
    var n2=document.getElementById("n2").value;
    var soma = n1 / n2 ;
    alert(soma);
 } 

 function mostrarresultados() {

 }

 function limpar(){
    //alert("1");
    var f=document.getElementById("frm");
    var n1 = f.n1;
    var n2 = f.n2;

    n1.value = "";
    n2.value = "";
 }