const fs = require('fs');
const data = require('./data.json')
    // create
exports.post = function(req, res) {
    // req.body
    // {frase:	"fdfd",autor:"dfdf", foto:"http://localhost:3000/phrases/addphrase"}

    //[	"frase",	"autor","foto"]
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == '') {
            return res.send('please, fill all field')
        }
    }

    // []
    data.phrases.push(req.body) //[{...}]
        // data.phrases.push(req.body) //[{...}]

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file erro!")

        return res.redirect('/phrases')
    })

    // return res.send(req.body)
}