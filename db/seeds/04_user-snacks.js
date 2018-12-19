
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_snacks').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_snacks').insert([
        { user_id: 1, snack_id: 1 },
        { user_id: 2, snack_id: 2 },
        { user_id: 1, snack_id: 3 },
        { user_id: 3, snack_id: 4 },

      ]);
    })
};