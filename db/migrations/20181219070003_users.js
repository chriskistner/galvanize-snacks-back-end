
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('user-name').notNullable().unique();
    table.string('password').notNullable();
    table.string('first-name').defaultTo('');
    table.string('last-name').defaultTo('');
    table.timestamps(true, true);
  })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users')
};
