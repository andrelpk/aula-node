// Funções

var n1 = 2;
var n2 = 5;

var abc = "oi galera!";

/*
    subrotina
    E -> P -> S

    Entrada -> Argumentos da Função
    Processamento -> Execução da função
    Saida -> Retorno
*/   
function soma(n1, n2)
{
    var abc = "Dentro da Função";
    console.log(abc)
    var total = n1 + n2;
    return total;
}

var res = soma(n1, n2);

console.log(res);