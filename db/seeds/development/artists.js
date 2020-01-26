exports.seed = function(knex, Promise) {
    return knex('artists').del()
        .then(function() {
            return knex('artists').insert([
                {
                    artist_name: 'Branch to Root', 
                    email: 'tylercmasterson@gmail.com', 
                    location: 'Denver, CO'
                }
            ])
        })
}