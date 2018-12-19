
exports.up = function(knex) {
  return knex.schema.createTable('reviews', table => {
      table.increments();
      table.string('written_by').references('users.user_name').notNullable();
      table.string('review').defaultTo('Written Review Pending');
      table.string('review_date').defaultTo(new Date());
      table.integer('score').defaultTo(1);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfItExists('reviews')
};
