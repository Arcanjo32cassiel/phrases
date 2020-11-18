const express = require('express')
const routes = express.Router()
const phrases = require('./phrases')

routes.get('/', function(req, res) {
    return res.redirect("/phrases")
})

routes.get('/phrases', function(req, res) {
    return res.render('phrases/index')
})
routes.get('/phrases/addphrase', function(req, res) {
    return res.render('phrases/addphrase')
})
routes.get('/phrases/:id/edit', phrases.edit)
routes.get('/phrases/:id', phrases.show)
routes.post("/phrases", phrases.post)
routes.put('/phrases', phrases.put)

module.exports = routes