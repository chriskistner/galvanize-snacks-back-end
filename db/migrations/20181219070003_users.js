
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('user_name').notNullable().unique();
    table.string('password').notNullable();
    table.string('first_name').defaultTo('');
    table.string('last_name').defaultTo('');
    table.timestamps(true, true);
  })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users')
};
