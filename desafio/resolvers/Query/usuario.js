const db = require("../../config/db");

module.exports = {
  async usuarios() {
    const usuarios = await db("usuarios");
    return usuarios;
  },
  async usuario(_, { filtro }) {
    // implementar
    console.log(filtro);
    const usuario = await db("usuarios").where("id", filtro.id);
    console.log(usuario);
    return usuario;
  },
};
