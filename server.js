const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")
const server = express()

server.use(express.urlencoded({ extended: true })) // reponsavel por deixar  re.body funcionar
server.use(express.static('public'))
server.use(routes)
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


// ouvindo uma porta
server.listen(5000, function() {
    console.log("server is running")
})