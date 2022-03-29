// bloco 1
// Evento onload é responsável por fazer executar a função somente depois que a página toda for executada 
window.onload = function() {

    console.log('Agora a página está carregada completamente')

}

function mostrarMensagem (){
    alert('Ola, sou uma mensagem')
}

//bloco 2

// a let tem que ter o mesmo nome do id, e você coloca o Reference na frente
let buttonReference = document.querySelector('#button')
// função anônima é permitido somente quando é igualada à alguma coisa, como no exemplo abaixo
buttonReference.onclick = function () {
    mostrarMensagem()
}

//bloco 3

// a melhor forma de fazer os eventos são por onlisten (algo que vai ficar aguardando ou escutando até ser chamado)

buttonReference.addEventListener('click', function () {
    mostrarMensagem()
})

// criação de uma classe tipo hover evento para o evento ocorrer só quando passa o mouse / mouseouver

