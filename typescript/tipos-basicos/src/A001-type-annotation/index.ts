/*eslint-disable */

// Tipos básicos
const nome: string = 'Thiago';
const idade: number = 20;
const adult: boolean = true;
const simbolo: symbol = Symbol('um simbolo');

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];

let arrayDeStrings: Array<string> = ['1', '2', '3'];
let arrayDeStrings2: string[] = ['1', '2', '3'];

// Objetos
const pessoa: {
  nome: string;
  idade: number;
  adulto?: boolean;
} = { nome: 'Thiago', idade: 20, adulto: true };

// Funções
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
