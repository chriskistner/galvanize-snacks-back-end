
exports.up = function(knex) {
  return knex.schema.createTable('snacks',table => {
      table.increments();
      table.string('name').notNullable();
      table.string('created_by').references('users.user_name').notNullable();
      table.string('snack_desc').defaultTo('Description Pending')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('snacks')
};
