const db = require("../../config/db");

module.exports = {
  async perfis(usuario) {
    // implementar (Assunto novo!)
    const usuarios = await db("usuarios");
    return usuarios;
  },
};
