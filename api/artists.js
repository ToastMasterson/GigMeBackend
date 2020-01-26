const express = require('express')
const router = express.Router()
const { transaction } = require('objection')

const Artist = require('../models/Artist')

const knex = Artist.knex()

router.get('/artists', (req, res) => {
    Artist.query().then(artists => {res.json(artists)})
})


module.exports = { router: router }