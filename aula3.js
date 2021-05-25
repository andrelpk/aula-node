
var lib = require("./util");

console.log(lib);

var teste = lib("Cidade");
console.log(teste);

// ES6 ou ES2015

var nome = "André";
nome = 123;

let abc = "abc";
const efg = "efg"; // NÃO PODE ALTERAR DEPOIS DE CRIADO

let idade = 123;

// funçaõ anonima
let soma = function(n1, n2){
    return n1 + n2;
}
// forma simplificada  ( => = RETURN )
let outra = (n1, n2) => n1 + n2;

//console.log( nome.length );

/*
   Programação Orientada a Objetos

   função -> metodos -> function
   atributos -> propriedades -> variavel

   encapsulamento -> pacote

   molde -> classe

   instaciado -> criado em memoria

   */

   // antes do ES6
var Pessoa = function(){
    this.nome = "André";
}

// instancia do objeto
var andre = new Pessoa();
andre.nome = "Luizinho";

console.log(andre);

// apartir do ES6
class Caneta
{
    escrever()
    {
        console.log("escreveu no caderno");
    }
}

var bic = new Caneta();
bic.cor = "azul";

console.log(bic);

bic.escrever();
