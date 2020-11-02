const { perfis, usuarios } = require('../data/db')

module.exports = {
    ola() {
        return 'Mundo!'
    },
    horaAtual() {
        return new Date
    },
    usuarioLogado() {
        return {
            id: 1,
            name: 'Thiago Andrade Silva',
            email: 'thiago@email.com',
            idade: 20,
            salario_real: 3000.00,
            vip: true
        }
    },
    produtosEmDestaque() {
        return {
            nome: 'iPhone XS MAX',
            preco: 3450.00,
            desconto: 0.15,
        }
    },
    numerosMegaSena() {
        const crescente = (a, b) => a - b
        return Array(6)
        .fill(0)
        .map(n => parseInt(Math.random() * 60 + 1))
        .sort(crescente)
    },
    usuarios() {
        return usuarios
    },
    usuario(_, args) {
        const selecionados = usuarios.filter(u => u.id === args.id)
        return selecionados ? selecionados[0] : null
    },
    perfis() {
        return perfis
    }, 
    perfil(_, { id }) {
        const perfil = perfis.filter(p => p.id === id)
        return perfil ? perfil[0] : null
    }
}