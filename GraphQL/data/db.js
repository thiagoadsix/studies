let id = 1
function proximoId() {
    return id++
}

const usuarios = [
    {
        id: proximoId(),
        nome: 'Thiago',
        email: 'thiago@email.com',
        idade: 20,
        perfil_id: 1,
        status: 'ATIVO'
    },
    {
        id: proximoId(),
        nome: 'Kamilla',
        email: 'milla@email.com',
        idade: 15,
        perfil_id: 1,
        status: 'INATIVO'
    },
    {
        id: proximoId(),
        nome: 'Joeci',
        email: 'joeci@email.com',
        idade: 46,
        perfil_id: 2,
        status: 'BLOQUEADO'
    }
]

const perfis = [
    { id: 1, nome: 'Comun' },
    { id: 2, nome: 'Administrador' },
]

module.exports = { usuarios, perfis, proximoId }
