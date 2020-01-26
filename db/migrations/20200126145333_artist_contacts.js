
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artist_contacts', t => {
      t.increments('id').primary()
      t.string('email')
      t.string('facebook')
      t.string('bandcamp')
      t.string('spotify')
      t.string('soundcloud')
      t.string('instagram')
      t.integer('artist_profile_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artist_contacts')
};
