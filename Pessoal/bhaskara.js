// * Algoritmo que realiza a bhaskara dos números passados como parâmetro. Feito com intuito de praticar a lógica e a utilização da biblioteca Math em JavaScript.

class Bhaskara {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  };

  delta() {
    return (Math.pow(this.b, 2) - 4 * this.a * this.c);
  };

  bhaskara() {
    if (this.a == 0) {
      console.log("O valor de a deve ser diferente de 0.");
    } else if (this.delta() < 0) {
      console.log(`Sem raízes reais. O valor de delta é: ${this.delta()}`);
    } else {
        let x1 = (-this.b + Math.sqrt(this.delta(), 2)) / (2 * this.a);
        let x2 = (-this.b - Math.sqrt(this.delta(), 2)) / (2 * this.a);
    
        console.log(`O valor de delta é: ${this.delta()}. O valor de x¹ é: ${x1.toFixed(2)} e o valor de x² é: ${x2.toFixed(2)}.`)
    }
  };
};

const x = new Bhaskara(4, 8, 9);
const y = new Bhaskara(1, -5, 6);

x.bhaskara(); console.log(""); y.bhaskara();