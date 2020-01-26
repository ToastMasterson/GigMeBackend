const express = require('express')
const router = express.Router()
const { transaction } = require('objection')

const Artist = require('../models/Artist')

const knex = Artist.knex()

router.get('/artists', (req, res) => {
    Artist.query().then(artists => {res.json(artists)})
})

router.post('/artists', async (req, res) => {
    const newProfile = await transaction(knex, async (trx) => {
        const body = req.body
        const newArtist = await Artist
            .query(trx)
            .insertAndFetch(body)
            .catch(function(error) {
                console.error(error)
            })
        res.send(newArtist)
    })
})

router.patch('/artists/:id', (req, res) => {
    Artist.query()
    .patchAndFetchById(req.params.id, req.body)
    .catch(function(error) {
        console.error(error)
    })
    .then(artist => res.json(artist))
})

router.delete('/artists/:id', (req, res) => {
    Artist.query().deleteById(req.params.id)
    .catch(function(error) {
        console.error(error)
    })
    res.send("Artist successfully deleted from records")
})


module.exports = { router: router }