// variaveis
var facil = document.querySelector("#facil");

var confirmaPrimeiro = 'true';

var confirmaSegundo = 'true';

var confirmaTerceiro = 'true';

// funções



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
            
            primeiro = prompt("O que devemos pegar primeiro?");
        }
    }
    

    var segundoProduto = prompt("o que faremos com a carne?");

    var segundo = segundoProduto.toLowerCase();

    while(true){
        if (segundo.length > 0 && segundo.length < 20){
            
            break;
        } else {
            
            alert("entrada invalida");
            
            segundo = prompt("o que faremos com a carne?");
        }
    }

    var terceiro = prompt("Quanto tempo na churrasqueira?");


    while(true){
        if (terceiro > 0 || terceiro < 60){
            
            break;

        } else {
            
            alert("entrada invalida");
            
            segundo = prompt("o que faremos com a carne?");
        }
    }



    if(!primeiro == "pao" || !primeiro == "pão"){
        
        confirmaPrimeiro = 'false';

    }

    if(!segundo == "temperar" || !segundo == "tempero"){
        confirmaSegundo = 'false';

    }

    if(!terceiro == 15){

        confirmaTerceiro = 'false';

    }


   


})