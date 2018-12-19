
exports.up = function(knex) {
  return knex.schema.createTable('reviews', table => {
      table.increments();
      table.integer('snack_id').references('snacks.id').notNullable();
      table.string('written_by').references('users.user_name').notNullable();
      table.string('review').defaultTo('Written Review Pending');
      table.integer('score').defaultTo(1);
      table.string('review_date').defaultTo(new Date());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfItExists('reviews')
};
