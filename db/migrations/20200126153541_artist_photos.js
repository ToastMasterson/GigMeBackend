
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artist_photos', t => {
      t.increments('id').primary()
      t.string('title')
      t.string('link')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artist_photos')
};
