var user = prompt("Escolha pedra,papel ou tesoura?")
var Bot = ["pedra", "papel", "tesoura"]
var EscolhaBot = Bot[Math.floor(Math.random()*2+0)]
console.log(EscolhaBot)
var jogoPPT = function (string, string){
    var pedra = "pedra"
    var papel = "papel"
    var tesoura = "tesoura"
    var placar = {
        user: 0,
        bot: 0
    }
     
       if(user === EscolhaBot){
        return "Empate";
        }else if(tesoura < pedra){
            return "Tesoura perde para pedra, pois pedra quebra tesoura";
        }else if(pedra < papel){
            return "Pedra perde para papel, pois papel cobre a pedra";
        }else if(papel > pedra){
            return "Papel cobre a pedra";
        }else if(tesoura > papel){
            return "Tesoura corta papel";
        }else if(papel < tesoura){
            return "papel perde pois, tesoura corta papel";
        }else{
            return "opção invalida";
        }
};
jogoPPT(user,Bot);