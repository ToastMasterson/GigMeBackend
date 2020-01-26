const { Model } = require('objection')
const knex = require('../db/knex')

Model.knex(knex)

class Artist extends Model {
    static get tableName(){
        return 'artists'
    }

    static get relationMappings() {
        //relation models
        return {
            //relations to/from
        }
    }
}

module.exports = Artist