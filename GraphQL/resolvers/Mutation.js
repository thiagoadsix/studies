const { usuarios, proximoId } = require('../data/db')

module.exports = {
    novoUsuario(_, { nome, email, idade }) {
        const emailExistente = usuarios.some(u => u.email === email)
        
        if (emailExistente) {
            throw new Error('Email já existente!')
        }
        
        const novo = {
            id: proximoId(),
            nome,
            email,
            idade,
            perfil_id: 1,
            status: 'ATIVO'
        }

        usuarios.push(novo)
        return novo
    },
    excluirUsuario(_, { id }) {
        const i = usuarios.findIndex(u => u.id === id)
        if (i < 0) return null
        const exluidos = usuarios.splice(i, 1)
        return exluidos ? exluidos[0] : null
    }
}