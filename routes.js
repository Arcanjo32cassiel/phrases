const express = require('express')
const routes = express.Router()
const phrase = require('./phrases')

routes.get('/', function(req, res) {
    return res.redirect("/phrases")
})

routes.get('/phrases', function(req, res) {
    return res.render('phrases/index')
})
routes.get('/phrases/addphrase', function(req, res) {
    return res.render('phrases/addphrase')
})

routes.post("/phrases", phrase.post)

module.exports = routes