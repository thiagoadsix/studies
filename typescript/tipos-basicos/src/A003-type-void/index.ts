function noReturn(...args: string[]): void {
  console.log(args.join(''));
}

const pessoa = {
  nome: 'Thiago',
  sobrenome: 'Andrade',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

noReturn('Thiago', 'Vini');
pessoa.exibirNome();

export { pessoa };
