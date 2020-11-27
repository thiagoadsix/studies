const { perfis, proximoId } = require("../../data/db");

function indicePerfil(filtro) {
  if (!filtro) return -1;
  const { id, nome } = filtro;

  if (id) {
    return perfis.findIndex((u) => u.id === id);
  } else if(nome) {
    return perfis.findIndex((u) => u.nome === nome);
  }

  return -1;
}

module.exports = {
  novoPerfil(_, { dados }) {
    const perfilExistente = perfis.some((u) => u.nome === dados.nome);

    if (perfilExistente) {
      throw new Error("Perfil já existente!");
    }

    const novo = {
      id: proximoId(),
      ...dados,
    };

    perfis.push(novo);
    return novo;
  },
  excluirPerfil(_, { filtro }) {
    const i = indicePerfil(filtro);
    if (i < 0) return null;
    const exluidos = perfis.splice(i, 1);
    return exluidos ? exluidos[0] : null;
  },
  alterarPerfil(_, { filtro, dados }) {
    const i = indicePerfil(filtro);

    if (i < 0) return null;

    const perfil = {
      ...perfis[i],
      ...dados,
    };

    perfis.splice(i, 1, perfil);

    return perfil;
  },
};
