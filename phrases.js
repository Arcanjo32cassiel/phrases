const fs = require('fs');
const data = require('./data.json')
    // show
exports.show = function(req, res) {
        // req.params.id=/:id
        const { id } = req.params;

        const foundphrase = data.phrases.find(function(phrase) {
            return phrase.id == id
        })
        if (!foundphrase) return res.send("phrase not found")

        const phrase = {
            ...foundphrase,
            "posted_in": new Intl.DateTimeFormat('pt-BR').format(foundphrase.posted_in)

        }
        return res.render("phrases/show", { phrase })
    }
    // create
exports.post = function(req, res) {
    const keys = Object.keys(req.body)

    // validate
    for (key of keys) {
        if (req.body[key] == '') {
            return res.send('please, fill all field')
        }
    }
    //  data processing
    let { phrase, author, photograph } = req.body

    const posted_in = Date.now()
    const id = Number(data.phrases.length + 1)
        // deconstruction
    data.phrases.push({
        id,
        phrase,
        author,
        photograph,
        posted_in
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file erro!")

        return res.redirect('/phrases')
    })

    // return res.send(req.body)
}