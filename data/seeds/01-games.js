
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        { title: 'Legend of Zelda', genre: 'action', releaseYear: '1986'},
        { title: 'Final Fantasy', genre: 'action', releaseYear: '1987'},
      ]);
    });
};
