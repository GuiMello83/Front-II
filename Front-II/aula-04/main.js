// console.log(document) //documento em javascript que vai apresentar todo html - ver a DOM
// console.dir(document) // encontramos de fato a DOM com toda a estrutura

//para pegar uma coisa em específico
// console.log(document.getElementsByTagName('h1')) 

//para peghar pelo nome da classe
// console.log(document.getElementsByClassName('teste'))

//agora por ID
// console.log(document.getElementById('tituloPrincipal'))

// Existe um jeito de pegar tudo especificando pelo query selector - ai tem que especificar o que quer sendo id # e class um .

// console.log(document.querySelector('h1'))

// como podemos usar:

var tituloPrincipal = document.querySelector('#tituloPrincipal')

tituloPrincipal.style.color = '#202020'