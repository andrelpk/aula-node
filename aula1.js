
var fs = require("fs");

var nome = "André";
var idade = 28;
var peso = 88.3;
var andando = false;

function oi()
{
    console.log("Ola pessoal!!!");
}

console.log("Antes da função");

fs.writeFile("turma.txt", "ola " + nome, oi);

console.log("Depois da função");