const bcrypt = require('bcryptjs');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          username: 'samwise',
          first_name: 'sam',
          last_name: 'gamgi',
          password: bcrypt.hashSync('password123', 10),
          email: 'samwise2019@sample.com'
        }
      ]);
    });
};
