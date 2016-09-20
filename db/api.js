'use strict';

const knex = require(`./knex`)

module.exports = {
  getAllUsers() {
    return knex('users');
  },
  getOneUser(id) {
    return knex('users')
    .where(`users.id`, id).first();
  },
  createOneUser(user) {
    return knex('users').insert(user);
  }
}
