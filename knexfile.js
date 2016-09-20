// Update with your config settings.

module.exports = {

  development: {
    client: `pg`,
    connection: `postgres://localhost/blog_express_knex`
  },
  production: {
    client: `pg`,
    connection: process.env.DATABASE_URL + `?ssl=true`
  }
};
