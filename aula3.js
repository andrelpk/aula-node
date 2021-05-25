
var nome = "André";

let abc = "abc";
const efg = "efg"; // NÃO PODE ALTERAR DEPOIS DE CRIADO

let soma = function(n1, n2){
    return n1 + n2;
}
// forma simplificada  ( => = RETURN )
let outra = (n1, n2) => n1 + n2;

console.log( nome.length )

function reverso()
{
    
}

var nome = "André";
var tam = nome.length - 1;
var saida = ""

while (tam >= 0)
{
saida = saida + nome.charAt(tam);

tam = tam - 1;
}