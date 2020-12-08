export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this;
  }

  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  mult(n: number): this {
    this.numero *= n;
    return this;
  }

  div(n: number): this {
    this.numero /= n;
    return this;
  }
}

const calculadora = new Calculadora(10);
calculadora.add(5).mult(2);
console.log(calculadora);
