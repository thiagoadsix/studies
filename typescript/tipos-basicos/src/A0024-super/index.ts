export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}
export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  getNomeCompleto(): string {
    console.log('Fazendo algo antes');
    const result = super.getNomeCompleto();
    return result + ' test';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Class Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Joeci', 'Severino', 49, '604.248.990-10');
const aluno = new Aluno('Thiago', 'Andrade', 20, '705.866.351-30', '0001');
const cliente = new Cliente('Raphaella', 'Andrade', 39, '525.654.241-84');

console.log(pessoa);
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);
