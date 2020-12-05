export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public _cpf: string
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Thiago', 'Andrade', 20, '125.485.987-40');
const pessoa2 = Pessoa.criaPessoa('Joeci', 'Severino');

console.log(pessoa1);
console.log(pessoa2);

pessoa1.metodoNormal();
