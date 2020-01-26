const {Model} = require('objection')
const knex = require('../db/knex')

Model.knex(knex)

class ArtistContact extends Model {
    static get tableName(){
        return 'artist_contacts'
    }

    static get relationMappings() {
        const Artist = require('./Artist')

        return {
            owner: {
                relation: Model.BelongsToOneRelation,
                modelClass: Artist,
                join: {
                    from: 'artist_contacts.artist_profile_id',
                    to: 'artist_profiles.id'
                }
            }
        }
    }
}

module.exports = ArtistContact