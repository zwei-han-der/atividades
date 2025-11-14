// * Algoritimo que recebe os dados de um atleta e calcula sua categoria, IMC e média válida das notas. Feito com intuito de praticar funções e classes em JavaScript.

class Atleta {
    constructor(nome, idade, peso, altura, notas = []) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return 'Infantil';
        } else if (this.idade >= 12 && this.idade <= 13) {
            return 'Juvenil';
        } else if (this.idade >= 14 && this.idade <= 15) {
            return 'Intermediário';
        } else if (this.idade >= 16 && this.idade <= 30) {
            return 'Adulto';
        }

        return 'Sem categoria';
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    calculaMediaValida() {
        return this.notas.reduce((acumulador, atual) => { return acumulador += atual; }, 0) / this.notas.length
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC().toFixed(2);
    }

    obtemMediaValida() {
        return this.calculaMediaValida().toFixed(2);
    }
}

const atleta = new Atleta("Carlos Silva", 15, 60, 1.70, [8.5, 9.0, 7.5, 10]);

console.log("Nome:", atleta.obtemNomeAtleta());
console.log("Idade:", atleta.obtemIdadeAtleta());
console.log("Peso:", atleta.obtemPesoAtleta());
console.log("Notas:", atleta.obtemNotasAtleta());
console.log("Categoria:", atleta.obtemCategoria());
console.log("IMC:", atleta.obtemIMC());
console.log("Média válida:", atleta.obtemMediaValida());
