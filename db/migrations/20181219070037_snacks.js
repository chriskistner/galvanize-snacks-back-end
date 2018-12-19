
exports.up = function(knex) {
  return knex.schema.createTable('snacks',table => {
      table.increments();
      table.string('name').notNullable();
      table.string('created-by').references('users.user-name').notNullable();
      table.string('snack-desc').defaultTo('Description Pending')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('snacks')
};
