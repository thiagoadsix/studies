const db = require("../config/index");

db("perfis")
  .select("id", "nome")
  .then(console.log)
  .finally(() => db.destroy());
