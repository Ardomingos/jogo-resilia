// variaveis
var facil = document.querySelector("#facil");

var confirmaPrimeiro = 'true';

var confirmaSegundo = 'true';

var confirmaTerceiro = 'true';

// funções




//logica

console.log("olá mundo");

facil.addEventListener("click", function(){

    alert("Você escolheu a dificuldade facil, vamos lá");

    alert("para que o Hamburger fique bom, precisamos de tres etapas, primeira vamos pegar o Pão depois temperamos a carne e deixamos na churrasqueira por 15 minutos ")

    var primeiroProduto = prompt("O que devemos pegar primeiro?");

    var primeiro = primeiroProduto.toLowerCase();
   
    while(true){
        if (primeiro.length > 0 && primeiro.length < 20){
            
            break;
        } else {
            
            alert("entrada invalida");
            
            primeiroProduto = prompt("O que devemos pegar primeiro?");

            primeiro = primeiroProduto.toLowerCase();
        }
    }
    

    var segundoProduto = prompt("o que faremos com a carne?");

    var segundo = segundoProduto.toLowerCase();

    while(true){
        if (segundo.length > 0 && segundo.length < 20){
            
            break;
        } else {
            
            alert("entrada invalida");
            
            segundoProduto = prompt("o que faremos com a carne?");

            segundo = segundoProduto.toLowerCase();
        }
    }

    var terceiro = prompt("Quanto tempo na churrasqueira?");


    while(true){

        if (terceiro > 0 && terceiro < 60){
            
            break;
            
        } else {
            
            alert("entrada invalida");
            
            terceiro = prompt("Quanto tempo na churrasqueira?");
        }
    }   


})