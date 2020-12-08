export function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(4, 5));
console.log(add('a', 'b'));

type Pessoa = { nome: string };
type Animal = { cor: string };
type PessoaOuAnimal = Pessoa | Animal;

export class Aluno implements Pessoa {
  constructor(public nome: string) {}
}

function monstrarNome(obj: PessoaOuAnimal): void {
  if ('nome' in obj) console.log({ withInOperator: obj.nome });
  if (obj instanceof Aluno) console.log({ withInstanceof: obj.nome });
}

monstrarNome(new Aluno('Thiago'));
