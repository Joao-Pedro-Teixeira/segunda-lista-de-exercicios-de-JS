//ex1_easy
const nome = 'João';
console.log(nome);

//ex2_easy
let y1 ='João';
 console.log(y1 =='João');

//ex3_easy
 let numero = 15;
 if (numero > 10) {
    console.log('esse numero é maior que 10');
    
} else {
    console.log('esse numero é menor que 10');
 }

 //ex4_easy
 let idade = 19;
 if (idade >= 18) {
    console.log('parabens!');
    
} else {
    console.log('ainda não tem 18 anos');
 }

 //ex5_easy
 let idade1 = 17 
 if (idade1 >= 16) { 
    console.log('pode votar')
 } else {
    console.log('não pode votar');
 }

 //ex6_easy
 let numero1 = 70;
 if (numero1 > 50 && numero1 < 100 ) {
    console.log(true);
 } else { 
    console.log(false);
 }
 
//ex1_medium
const nome2 = 'neymarjr';
console.log(nome2);
const idade2 = 31;
console.log(idade2);
if (idade2 >= 18) { 
    console.log('maior de idade')
 } else {
    console.log('menor de idade');
 }

//ex2_medium
let Numero4 = 120;
let Numero5 = 121;
if (Numero4 > Numero5) {
    console.log(Numero4);
} else {
    console.log(Numero5);
}

//ex3_medium
const palavra = 'olá mundo!';
if (palavra.length >= 5 ) {
    console.log('essa palavra passa do numero de caracteres');
} else {
    console.log(palavra);
}

//ex4_medium 
let num1 = 4;
let num2 = 3;

if (num1 % 2 === 0 && num2 % 2 === 0) {
    console.log("Ambos os números são pares.");
} else {
    console.log("Nem todos os números são pares.");
}


//ex5_medium 
const texto = "JavaScript"
if (texto.includes("JavaScript")) {
    console.log("A string contém a palavra 'JavaScript'.");
} else {
    console.log("A string não contém a palavra 'JavaScript'.");
}

//ex6_medium
const salario = 1900;

if (salario > 2000) {
    console.log("Seu salário está acima de R$ 2.000.");
} else {
    console.log("Seu salário está em R$ 2.000 ou abaixo.");
}

//ex1_hard
const senha_user = "joao1903";
const temNumero = /\d/;

if (senha_user.length >= 8 && temNumero.test(senha_user)) {
    console.log("Senha válida.");
} else {
    console.log("Senha inválida. Ela deve ter pelo menos 8 caracteres e conter ao menos um número.");
}

//ex2_hard
const nota1 = 9;
const nota2 = 8;
const nota3 = 6;

const media = (nota1 + nota2 + nota3) / 3;

if (media > 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}


//ex3_hard
const ano = "2024";

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(`${ano} é um ano bissexto.`);
} else {
    console.log(`${ano} não é um ano bissexto.`);
}


//ex4_hard
const number1 = 10;
const number2 = 20;
const number3 = 30;

const maior = Math.max(number1, number2, number3);

console.log(`O maior número é: ${maior}`);


//ex5_hard
const usuarioCorreto = "damper";
const senhaCorreta = "neymar123";

const usuario = "damper";
const senha = "neymar1234";

if (usuario === usuarioCorreto && senha === senhaCorreta) {
    console.log("Login bem-sucedido!");
} else {
    console.log("Usuário ou senha incorretos.");
}


//ex6_hard
const a = 10;
const b = 5;
const c = 15;

console.log(c === a + b);

//ex7_hard
const senhacorreta = "123456";
let tentativas = 0;

while (tentativas < 3) {
    const senha = prompt("Digite sua senha:");
    
    if (senha === senhaCorreta) {
        console.log("Login bem-sucedido!");
        break;
    } else {
        tentativas++;
        console.log(`Senha incorreta. Tentativa ${tentativas} de 3.`);
    }
    
    if (tentativas === 3) {
        console.log("Usuário bloqueado após 3 tentativas.");
    }
}


//ex8_hard
const trabalhoExtra = prompt("Fez trabalho extra? (sim/não):").toLowerCase() === "sim";
const aulasParticipadas = parseInt(prompt("Quantas aulas você participou?"));
const totalAulas = parseInt(prompt("Qual o total de aulas?"));
const notas1 = parseFloat(prompt("Digite a nota da primeira prova:"));
const notas2 = parseFloat(prompt("Digite a nota da segunda prova:"));

const participouMaisDe80 = (aulasParticipadas / totalAulas) > 0.8;
const notasValidas = nota1 > 7 && nota2 > 7;

if (trabalhoExtra && participouMaisDe80 && notasValidas) {
    console.log("Pontuação final: Excelente");
} else {
    console.log("Pontuação final: Insuficiente");
}

