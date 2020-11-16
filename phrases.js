const fs = require('fs');
const data = require('./data.json')

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

    req.body.id = Number(data.phrases.length + 1)
        // deconstruction
    data.phrases.push({
        phrase,
        author,
        photograph
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file erro!")

        return res.redirect('/phrases')
    })

    // return res.send(req.body)
}