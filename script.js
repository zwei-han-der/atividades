// class Atleta {
//     constructor(nome, idade, peso, altura, notas = []) {
//         this.nome = nome;
//         this.idade = idade;
//         this.peso = peso;
//         this.altura = altura;
//         this.notas = notas;
//     }

//     calculaCategoria() {
//         if (this.idade >= 9 && this.idade <= 11) {
//             return 'Infantil';
//         } else if (this.idade >= 12 && this.idade <= 13) {
//             return 'Juvenil';
//         } else if (this.idade >= 14 && this.idade <= 15) {
//             return 'Intermediário';
//         } else if (this.idade >= 16 && this.idade <= 30) {
//             return 'Adulto';
//         }

//         return 'Sem categoria';
//     }

//     calculaIMC() {
//         return this.peso / (this.altura * this.altura);
//     }

//     calculaMediaValida() {
//         return this.notas.reduce((acumulador, atual) => { return acumulador += atual; }, 0) / this.notas.length
//     }

//     obtemNomeAtleta() {
//         return this.nome;
//     }

//     obtemIdadeAtleta() {
//         return this.idade;
//     }

//     obtemPesoAtleta() {
//         return this.peso;
//     }

//     obtemNotasAtleta() {
//         return this.notas;
//     }

//     obtemCategoria() {
//         return this.calculaCategoria();
//     }

//     obtemIMC() {
//         return this.calculaIMC().toFixed(2);
//     }

//     obtemMediaValida() {
//         return this.calculaMediaValida().toFixed(2);
//     }
// }

// const atleta = new Atleta("Carlos Silva", 15, 60, 1.70, [8.5, 9.0, 7.5, 10]);

// console.log("Nome:", atleta.obtemNomeAtleta());
// console.log("Idade:", atleta.obtemIdadeAtleta());
// console.log("Peso:", atleta.obtemPesoAtleta());
// console.log("Notas:", atleta.obtemNotasAtleta());
// console.log("Categoria:", atleta.obtemCategoria());
// console.log("IMC:", atleta.obtemIMC());
// console.log("Média válida:", atleta.obtemMediaValida());

// ===============

// let x = parseInt(prompt('Digite um número para saber a tabuada: '));

// console.log(`Tabuada:\n\n1 x ${x} = ${1 * x}\n2 x ${x} = ${2 * x}\n3 x ${x} = ${3 * x}\n4 x ${x} = ${4 * x}\n5 x ${x} = ${x}\n6 x ${x} = ${6 * x}\n7 x ${x} = ${7 * x}\n8 x ${x} = ${8 * x}\n9 x ${x} = ${9 * x}\n10 x ${x} = ${10 * x}`)

// ===============

// function askQuestion(question) {
//   return new Promise((resolve) => {
//     rl.question(question, (answer) => {
//       resolve(answer);
//     });
//   });
// }

//var prompt = require('prompt');
//
//
function one() {
  let valor = parse(prompt("Qual o valor da sua compra? "));
  const categoria = parse(
    prompt(
      "Qual a categoria do seu clube? (Escolha entre bronze, prata ou ouro) "
    )
  );

  if (categoria == "bronze") {
    console.log(`O valor da sua compra ficou: R$${valor}. Volte semrpe!`);
  } else if (categoria == "prata" && valor > 100) {
    let valorDescontado = valor - valor * 0.1;

    console.log(`O valor da sua compra ficou: R$${valorDescontado}`);
  }
}
one();
