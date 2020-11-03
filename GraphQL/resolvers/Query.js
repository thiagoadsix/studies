const { perfis, usuarios } = require('../data/db')

module.exports = {
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