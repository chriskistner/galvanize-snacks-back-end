
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1, snack_id: 1, written_by: 'tophog', review: 'Trust me, it tastes better than it sounds', score: 4},
        {id: 2, snack_id: 1, written_by: 'juniger', review: 'I cannot get the name out of my head while eating it', score: 2},
        {id: 3, snack_id: 3, written_by: 'foxboy', review: 'Mmmmmmm cheese', score: 5},
        {id: 4, snack_id: 4, written_by: 'juniger', review: 'Soooo good, but take forever to make', score: 4},
      ]);
    }).then(function(){
      return knex.raw(
        `SELECT setval('reviews_id_seq', (SELECT MAX(id) FROM reviews));`
      );
    })
};