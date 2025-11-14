// * Algoritimo que recebe os dados de vários atletas e calcula a média das notas. Feito com o intuito de praticar o manejamento de vetores e objetos em JavaScript.

let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5],
  },
];

class Jurados {
  constructor() {
    this.atletas = atletas;
  }

  calcularMedia(notas) {
    const soma = notas.reduce((acumulador, atual) => acumulador + atual, 0);
    return (soma / notas.length).toFixed(2);
  }

  avaliacao() {
    this.atletas.forEach((atleta) => {
      console.log(`Atleta: ${atleta.nome}`);
      console.log(`Notas Obtidas: ${atleta.notas.join(", ")}`);
      console.log(`Media: ${this.calcularMedia(atleta.notas)}\n`);
    });
  }
}

const jurados = new Jurados();
jurados.avaliacao();
