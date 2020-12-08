type CoresObj = typeof coresObj;
type KeysObj = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'greee',
  azul: 'blue',
};

function traduzirCores(cor: KeysObj, cores: CoresObj): string {
  return cores[cor];
}

console.log(traduzirCores('azul', coresObj));
