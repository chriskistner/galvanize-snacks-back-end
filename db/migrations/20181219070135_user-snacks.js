
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user-snacks', table => {
      table.increments();
      table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE');
      table.integer('snack_id').references('snacks.id').notNullable().onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfItExists(user-snacks)
};
