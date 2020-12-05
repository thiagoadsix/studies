type Idade = number;

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

export const pessoa: Pessoa = {
  idade: 20,
  nome: 'Thiago',
  salario: 3.499,
  corPreferida: 'Preto',
};

console.log(pessoa);
