const db = require("../config/index");

const novoPerfil = {
  nome: "visitante",
  rotulo: "Visitante",
};

db("perfis")
  .insert(novoPerfil)
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err.sqlMessage))
  .finally(() => db.destroy());
