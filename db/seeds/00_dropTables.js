
'use strict'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_snacks').del()
    .then(() => knex('reviews').del())
    .then(() => knex('snacks').del())
    .then(() => knex('users').del())
}
