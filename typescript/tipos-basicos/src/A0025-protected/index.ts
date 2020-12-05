export class Empresa {
  public readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) {}
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '45.136.401/0001-01');
  }

  popColaborator(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

const empresa = new Udemy();
const colaborador1 = new Colaborador('Thiago', 'Andrade');
const colaborador2 = new Colaborador('Joeci', 'Severino');
const colaborador3 = new Colaborador('Raphaella', 'Dias');
empresa.adicionarColaborador(colaborador1);
empresa.adicionarColaborador(colaborador2);
empresa.adicionarColaborador(colaborador3);
const colaboradorRemovido = empresa.popColaborator();

console.log(colaboradorRemovido);
console.log(empresa);
