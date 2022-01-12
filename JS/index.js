var facil = document.querySelector("#facil");

facil.addEventListener("click", function(){

    alert("A receita é A, B, C e tem que deixar por C no fogo")

    var primeiro = prompt("qual o primeiro ingrediente");

    var segundo = prompt("qual o segundo ingrediente");

    var terceiro = prompt("qual o terceiro ingrediente");

    var quarto = prompt("quanto tempo no fogo?");


    var string = "aqui tem o " + primeiro + " aqui tem o " + segundo + " aqui tem o terceiro " + terceiro + " aqui tem o quarto " + quarto ;

    console.log(string)
})