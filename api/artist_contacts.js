const express = require('express')
const router = express.Router()
const { transaction } = require('objection')

const ArtistContacts = require('../models/ArtistContact')

const knex = ArtistContacts.knex()

router.get('/artistcontacts', (req, res) => {
    ArtistContacts.query().then(ArtistContactss => {res.json(ArtistContactss)})
})

router.post('/artistcontacts', async (req, res) => {
    const newProfile = await transaction(knex, async (trx) => {
        const body = req.body
        const newArtistContacts = await ArtistContacts
            .query(trx)
            .insertAndFetch(body)
            .catch(function(error) {
                console.error(error)
            })
        res.send(newArtistContacts)
    })
})

router.patch('/artistcontacts/:id', (req, res) => {
    ArtistContacts.query()
    .patchAndFetchById(req.params.id, req.body)
    .catch(function(error) {
        console.error(error)
    })
    .then(ArtistContacts => res.json(ArtistContacts))
})

router.delete('/artistcontacts/:id', (req, res) => {
    ArtistContacts.query().deleteById(req.params.id)
    .catch(function(error) {
        console.error(error)
    })
    res.send("Artist Contact successfully deleted from records")
})


module.exports = { router: router }