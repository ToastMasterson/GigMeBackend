
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artist_tracks', t => {
      t.increments('id').primary()
      t.string('title')
      t.string('album')
      t.string('release_year')
      t.string('play_time')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artist_tracks')
};
