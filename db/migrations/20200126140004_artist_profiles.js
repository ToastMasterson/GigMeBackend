
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artist_profiles', t => {
      t.increments('id').primary()
      t.string('summary')
      t.string('members')
      t.string('gear_list')
      t.string('influences')
      t.integer('artist_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artist_profiles')
};
