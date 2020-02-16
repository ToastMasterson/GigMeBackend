const { Model } = require('objection')
const knex = require('../db/knex')

Model.knex(knex)

class Artist extends Model {
    static get tableName(){
        return 'artists'
    }

    static get relationMappings() {
        const ArtistProfile = require('./ArtistProfile')
        const ArtistContact = require('./ArtistContact')
        const ArtistPhoto = require('./ArtistPhoto')
        const ArtistTrack = require('./ArtistTrack')
        const ArtistPost = require('./ArtistPost')
        return {
            artist_profile: {
                relation: Model.HasOneRelation,
                modelClass: ArtistProfile,
                join: {
                    from: 'artists.id',
                    to: 'artist_profiles.artist_id'
                }
            },
            artist_contact: {
                relation: Model.HasOneRelation,
                modelClass: ArtistContact,
                join: {
                    from: 'artists.id',
                    to: 'artist_contacts.artist_id'
                }
            },
            artist_gi: {
                relation: Model.Has
            }
        }
    }
}

module.exports = Artist