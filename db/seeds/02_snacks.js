
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('snacks').del()
    .then(function () {
      // Inserts seed entries
      return knex('snacks').insert([
        {id: 1, name: 'Roadkill', created_by: 'tophog', snack_desc: 'Like hamburger helper but made with rice.'},
        {id: 2, name: 'Quinoa Muffins', created_by: 'tophog', snack_desc: 'Quinoa cooked mixed with eggs and chese then baked in a muffin pan.'},
        {id: 3, name: 'Super Cheese Pizza', created_by: 'foxboy', snack_desc: 'Pizza with 37 kinds of cheese'},
        {id: 4, name: 'Super Cookies', created_by: 'juniger', snack_desc: 'Chocolate chip cookies with a pinch of ginger'},
      ]);
    }).then(function(){
      return knex.raw(
        `SELECT setval('snacks_id_seq', (SELECT MAX(id) FROM snacks));`
      );
    })
};
