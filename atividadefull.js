//-------Atividade Array
// 1. Faça um programa, seguindo os passos:
    
//a) Crie um array vazio e guarde-o em uma variável, chamada `tarefas`
    
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
// c) Imprima o array no console
    
//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
//e) Remova da lista o item de índice que o usuário escolheu.
    
//f) Imprima o array no console


// -------Atividade-----

// A) Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome, a idade, endereço e uma profissão. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem.

// Exemplo: Eu sou (nome), tenho (idade) anos, moro em (endereço) e sou (profissão).



// B) Escreva uma função que receba 2 números como parâmentros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.


// C) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// D) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// E) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

//Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.b

//TAREFA 1 --------------------------------------------------------

let tarefas = [];

let tarefa1 = prompt("Indique a primeira tarefa:");
let tarefa2 = prompt("Indique a segunda tarefa:");
let tarefa3 = prompt("Indique a terceira tarefa:");

tarefas.push(tarefa1);
tarefas.push(tarefa2);
tarefas.push(tarefa3);

console.log(tarefas);

let indice = Number(prompt("Digite o índice de uma tarefa que já realizou:  (0, 1, ou 2)"));

tarefas.splice(indice, 1);

console.log(tarefas);

//TAREFA 2 -----------------------------------------------------

function mensagem(item1, item2, item3, item4){
    console.log("Eu sou", item1, ", tenho", item2, "anos, moro em", item3, "e sou", item4)
}
mensagem("Rafa", 17, "Rio Grande do Sul", "programador")

//TAREFA 3 -----------------------------------------------------

let entrada1 = Number(prompt("primeira entrada:"));
let entrada2 = Number(prompt("segunda entrada:"));

function soma(item1, item2){
    let soma = item1 + item2
    console.log("A soma dos dois valores é", soma)
}

soma(entrada1, entrada2)

//TAREFA 4 -----------------------------------------------------

let entrada1_c = Number(prompt("primeira entrada:"));
let entrada2_c = Number(prompt("segunda entrada:"));

function maior(item1, item2){
    if(item1 >= item2){
        console.log(Boolean(item1 >= item2))
    }
}

maior(entrada1_c, entrada2_c)

//TAREFA 5 -----------------------------------------------------

let entrada = Number(prompt("Sua entrada:"));

function par(item1){
    console.log(Boolean(item1 % 2 == 0))
}
console.log("O número", entrada, "é par?")
par(entrada)

//TAREFA 6 -----------------------------------------------------

function somar(item1, item2){
    soma = item1 + item2
    console.log(soma)
}
function subtracao(item1, item2){
    subtracao = item1 - item2
    console.log(subtracao)
}
function multiplicacao(item1, item2){
    multiplicacao = item1 * item2
    console.log(multiplicacao)
}
function divisao(item1, item2){
    divisao = item1 / item2
    console.log(divisao)
}

let num1 = Number(prompt("Insira o primeiro número:"))
let num2 = Number(prompt("Insira o segundo número:"))

somar(num1, num2)
subtracao(num1, num2)
multiplicacao(num1, num2)
divisao(num1, num2)
