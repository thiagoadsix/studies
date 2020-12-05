const object: {
  readonly chaveA: string;
  chaveB: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

object.chaveC = 'Valor C';

console.log(object);
