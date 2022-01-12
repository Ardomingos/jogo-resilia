// variaveis
var medio = document.querySelector("#medio");

var string = "Parabens, você acertou tudo"


//logica

medio.addEventListener("click", function(){

    alert("Você escolheu a dificuldade média, vamos lá");

    alert("para que a sopa fique gostosa, vamos colocar tomates e logo apos a batata, então adicionaremos o frango e por fim deixaremos no fogo por 23 minutos para pegar o gosto ")

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
    

    var segundoProduto = prompt("qual o segundo ingrediente?");

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

    var terceiroProduto = prompt("que tipo de carne vamos usar?");

    var terceiro = terceiroProduto.toLowerCase();

    while(true){

        if (terceiro.length > 0 && terceiro.length < 20){
            
            break;
            
        } else {
            
            alert("entrada invalida");
            
            terceiro = prompt("Quanto tempo na churrasqueira?");
        }
    }

    var quarto = prompt("Quanto tempo cozinhando?")


    while(!true){

        if(quarto > 0 && quarto < 60){
            
           
            alert("tempo incorreto");

            quarto = prompt("Quanto tempo cozinhando?")

        }
}
    var erros = [];

    console.log(erros.length);

    if(primeiro != "tomate"){

        erros.push("Primeiro passo incorreto");
    
    } 


    if(segundo != "batata" && segundo != "batatas"){

        erros.push("segundo passo incorreto");

    }

    if(terceiro != "frango"){
        
        erros.push("terceiro passo incorreto")
    }

    if(quarto != 23){

        erros.push("O tempo de cozimento está incorreto");

    }


    if(erros.length != 0){
        
        alert(erros);

    } else {

        alert(string);
    }
    
    console.log(erros.length)

});



