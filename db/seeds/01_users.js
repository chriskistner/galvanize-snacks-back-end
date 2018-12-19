
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, user_name: 'tophog', password: "eldar911", first_name: 'Chris', last_name:"Kistner"},
        {id: 2, user_name: 'foxboy', password: "meeow", first_name: 'Tails', last_name:"Barton"},
        {id: 3, user_name: 'juniger', password: "tiger", first_name: 'Juniper', last_name:"Kistner"},
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      );
    })
};