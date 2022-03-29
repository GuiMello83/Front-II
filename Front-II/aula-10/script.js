let inputNomeReferencia = document.querySelector('#inputNome')
let inputTermosReferencia = document.querySelector('#inputTermos')
let botaoConcluirCadastroReferencia = document.querySelector('#botaoConcluirCadastro')
let inputsTipoPessoaReferencia = document.getElementsByName('tipoPessoa')
let selectCidadeReference = document.querySelector('#selectCidade')

let usuario = {}

botaoConcluirCadastroReferencia.addEventListener('click', function(event)
{

    event.preventDefault()

    
    /* O trim é responsável por pegar os espaços antes e depois da string e retirar */
    /* Você pode colocar a quantidade de opções que WebGLShaderPrecisionFormat, como o caso do touppercase */
    usuario.nome = inputNomeReferencia.value.trim().toUpperCase()
    usuario.aceitouTermos = inputTermosReferencia.checked



    
    console.log(inputTermosReferencia.checked)

     /* console.log(inputNomeReferencia.value) */
    /*  console.log(usuario) */

    /*esse for e if é para verificar qual input de radio está marcado */
     for (let tipoPessoa of inputsTipoPessoaReferencia){

        if(inputsTipoPessoa.checked){

            usuario.tipoPessoa = inputsTipoPessoa.value
        }
        console.log(tipoPessoa.checked)
     }
     /* O select é o mais tranquilo, pois vc pega apenas declarando com console.log */
     usuario.cidade = selectCidadeReference.value
     console.log(selectCidadeReference.value)

})
