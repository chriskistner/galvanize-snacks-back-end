
exports.up = function(knex) {
  return knex.schema.createTable('user_snacks', table => {
      table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE');
      table.integer('snack_id').references('snacks.id').notNullable().onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfItExists(user-snacks)
};
