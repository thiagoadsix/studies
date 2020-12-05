export class Produto {
  constructor(public nome: string, public preco: number) {}
}

export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

const produtoFone = new Produto('Fone de Ouvido - JBL', 350.99);
const produtoCamisa = new Produto('Camisa', 34.99);

const carrinho = new CarrinhoDeCompras();

carrinho.inserirProdutos(produtoFone);
carrinho.inserirProdutos(produtoCamisa);

console.log(carrinho.quantidadeProdutos());
console.log(carrinho.valorTotal());
