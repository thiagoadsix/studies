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
  getNomeCompleto(): string {
    return `Class Aluno: ${this.nome} ${this.sobrenome}`;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Class Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Joeci', 'Severino', 49, '604.248.990-10');
const aluno = new Aluno('Thiago', 'Andrade', 20, '705.866.351-30');
const cliente = new Cliente('Raphaella', 'Andrade', 39, '525.654.241-84');

console.log(pessoa);
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
