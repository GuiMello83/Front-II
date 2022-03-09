/* const numbers = [1, 2252, 3, 4, 15, 36]

console.log(numbers)

for (const number of numbers) {
  console.log(number + 1)
}

const user = {
  name: 'Gui Mello',
  age: 21,
  birthDate: '18/05/2001'

}

console.log(user.birthDate)

for(let userDetail in user){
  console.log(userDetail)
} */

let escolhaUsuario = parseInt (prompt('1 - Pedra, 2 - Papel, 3 - Tesoura'))
let escolhaBot = parseInte(Math.random()*3+1)

if(escolhaUsuario === escolhaBot){
  alert('Empatou')
}else if(escolhaUsuario){

}

console.log(escolhaUsuario, escolhaBot)

var Usuario = {
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

var Bot = {
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

Bot.pontos = calculaPontos(Bot)
Usuario.pontos = calculaPontos(Usuario)

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias + 1) 
  return pontos
  }

var jogadores = [Usuario, Bot]

