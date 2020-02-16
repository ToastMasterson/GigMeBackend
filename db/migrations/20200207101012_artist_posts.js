
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artist_posts', t=> {
        t.increments('id').primary()
        t.string('title')
        t.dateTime('date')
        t.time('created_at')
        t.string('body')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artist_posts')
};
