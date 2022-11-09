/*Variaveis*/
var nome = 'Pedro'
let sobrenome = 'Almeida' //Vamos utilizar essa forma
nomedomeio = 'Santos'

let n1 = 2
let n2 = 10
let comida = 'lanche'
let fumante = false

console.log(n1, n2, comida, fumante)

/*Tipos de dados */
console.log(typeof n1) //2 é number
console.log(typeof n2) // 10 é number
console.log(typeof comida) // lanche é string
console.log(typeof fumante) // false é boolean

let veiculos = ['carro', 'moto', 'avião'] // array
console.log(typeof veiculos) // todo array é do tipo object em js

let salvar = function () {

}
console.log(typeof salvar) // salvar é do tipo function

/* Estruturas de decisão */
/*
if(condiçao){
    valor se a condição for verdadeiro
}else{
    valor se a condição for falso
}
*/
let nota = 10
if (nota >= 5) { //if mais visto, com else
    console.log("Passou")
} else {
    console.log("Reprovou")
}

if (nota >= 5) { //if sem else
    console.log("Parabens, esta aprovado")
}

if (nota >= 7) { // if com + condições
    console.log("Aprovado")
} else if (nota >= 5) {
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}

let dia = 2
switch (dia) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda")
        break
    case 3:
        console.log("Terça")
        break
    case 4:
        console.log("Quarta")
        break
    case 5:
        console.log("Quinta")
        break
    case 6:
        console.log("Sexta")
        break
    case 7:
        console.log("Sabado")
        break
    default:
        console.log("Dia invalido")
}

/* Estrutura de repetição */
let contador = 1
while (contador <= 10) {
    console.log(contador)
    contador++ //contador = contador + 1
}

for (let contador2 = 10; contador2 <= 20; contador2++) {
    console.log(contador2)
}

/*
while(condição){
    codigo do laço de repetiçao
}

for(inicializaçao; condiçao; incremento){
    codigo de laço de repetiçao
}
*/
