const express = require('express')
const router = express.Router()
const { transaction } = require('objection')

const ArtistProfile = require('../models/ArtistProfile')

const knex = ArtistProfile.knex()

router.get('/artistprofiles', (req, res) => {
    ArtistProfile.query().then(ArtistProfiles => {res.json(ArtistProfiles)})
})

router.post('/artistprofiles', async (req, res) => {
    const newArtistProfile = await transaction(knex, async (trx) => {
        const body = req.body
        const newArtistProfile = await ArtistProfile
            .query(trx)
            .insertAndFetch(body)
            .catch(function(error) {
                console.error(error)
            })
        res.send(newArtistProfile)
    })
})

router.patch('/artistprofiles/:id', (req, res) => {
    ArtistProfile.query()
    .patchAndFetchById(req.params.id, req.body)
    .catch(function(error) {
        console.error(error)
    })
    .then(ArtistProfile => res.json(ArtistProfile))
})

router.delete('/artistprofiles/:id', (req, res) => {
    ArtistProfile.query().deleteById(req.params.id)
    .catch(function(error) {
        console.error(error)
    })
    res.send("Artist Profile successfully deleted from records")
})


module.exports = { router: router }