const db = require("../config/index");

db("usuarios")
  .where({ id: 1 })
  .delete()
  .then(console.log)
  .finally(() => db.destroy());
