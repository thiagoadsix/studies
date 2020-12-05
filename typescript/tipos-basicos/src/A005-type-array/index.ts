// Array<T> || T[]
function multiplicateArgs(...args: Array<number>) {
  return args.reduce((acc, valor) => acc * valor, 1);
}

const result = multiplicateArgs(1, 2, 3);
console.log(result);

function concatenateStrings(...args: string[]): string {
  return args.reduce((acc, valor) => acc + valor);
}

const concatenate = concatenateStrings('1', '2', '3');
console.log(concatenate);

function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const upper = toUpperCase('a', 'b', 'c');
console.log(upper);
