
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Chris', last_name:"Kistner"},
        {id: 2, first_name: 'Jack', last_name:"Black"},
        {id: 3, first_name: 'Jackie', last_name:"Chan"}
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('actors_id_seq', (SELECT MAX(id) FROM actors));`
      );
    })
};