
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user-snacks', table => {
      table.increments();
      table.integer('user-id').references('users.id').notNullable().onDelete('CASCADE');
      table.integer('snack-id').references('snacks.id').notNullable().onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfItExists(user-snacks)
};
