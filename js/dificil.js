// variaveis
var dificil = document.querySelector("#dificil");

var string = "Parabens, você acertou tudo"


//logica

dificil.addEventListener("click", function(){

    alert("Você escolheu a dificuldade dificil, vamos lá");

    alert("para que não erre a receita, vamos usar a quantidade de medida dos ingredites, ok? preste atenção a seguir");

    alert("primeiro ingrediente é açucar de padeiro que iremosusar 20gramas, logo após devemos pegar uma lata de leite condensado e por fim 2 gemas de ovo.")


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
    

    var segundo = prompt("quantas gramas?");


    while(!true){
        if (segundo < 0 && segundo > 100){
            
            break;
       
        } else {
            
            alert("entrada invalida");
            
            segundoProduto = prompt("quantas gramas?");

            segundo = segundoProduto.toLowerCase();
            
        }
    }

    var terceiroProduto = prompt("qual o proximo ingrediente?");

    var terceiro = terceiroProduto.toLowerCase();

    while(true){

        if (terceiro.length > 0 && terceiro.length < 30){
            
            break;
            
        } else {
            
            alert("entrada invalida");
            
            var terceiroProduto = prompt("qual o proximo ingrediente?");

            var terceiro = terceiroProduto.toLowerCase();
        }
    }

    var quarto = prompt("Quantas unidades?")


    while(!true){

        if(quarto > 0 && quarto < 60){
            
           
            alert("quantidade invalida");

            quarto = prompt("Quantas unidades?")

        }
}


    var quinto = prompt("Quantos ovos serão usados?");

    while(!true){

        if(quinto > 0 && quinto < 60){
            
           
            alert("quantidade invalida");

            quinto = prompt("Quantos ovos serão usados?");

        }
    }

    var sextoProduto = prompt("Qual parte do ovo será usada?");

    var sexto = sextoProduto.toLowerCase();

    while(!true){

        if(sexto.length < 0 && sexto.length > 0)
        {
            
            alert("item invalido")

            sextoProduto = prompt("Qual parte do ovo será usada?");

            sexto = sextoProduto.toLowerCase();       

        }        
    }

    var erros = [];

    console.log(erros.length);

    if(primeiro != "açucar de padeiro" && primeiro != "acucar de padeiro"){

        erros.push("Primeiro passo incorreto");
    
    } 


    if(segundo != 20){

        erros.push("quantia de gramas incorreta");

    }

    if(terceiro != "leite condensado"){
        
        erros.push("terceiro passo incorreto")
    }

    if(quarto != 1){

        erros.push("quantia incorreta");

    }

    if(quinto != 2 ){

        erros.push("quantidade incorreta de ovos");

    }

    if(sexto != "gema"){

        erros.push("ultimo passo incorreto");

    }


    if(erros.length != 0){
        
        alert(erros);

    } else {

        alert(string);
    }
    
    console.log(erros.length)

});
