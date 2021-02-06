// Update with your config settings.

module.exports = {
  client: "your_client",
  connection: {
    database: "your_database_name",
    user: "your_user",
    password: "your_password",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
