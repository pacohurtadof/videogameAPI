const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())
jsonGames = [
    {"title": "Masefeh", "date": "28/12/23", "platform":"PC"},
    {"title": "Beer Run", "date": "28/12/23", "platform":"PC"},
    {"title": "Hire Me!", "date": "28/12/23", "platform":"PC"},
    {"title": "Christmas Present", "date": "28/12/23", "platform":"PC"},
    {"title": "Hypersomnia", "date": "28/12/23", "platform":"PC"},
    {"title": "Mortadelo y Filemón: La Sexta Secta", "date": "29/12/23", "platform":"PC"},
    {"title": "Ancient Spirits: Columbu's Legacy", "date": "29/12/23", "platform":"PC"},
    {"title": "Barely Racing", "date": "29/12/23", "platform":"PC"},
    {"title": "5 Force Fighters", "date": "29/12/23", "platform":"PC"}
]


app.get('/getGames', (req, res) => {
    res.status(200).send(jsonGames)
} )

app.get('/ping', (req, res) => {
    res.status(200).send({
        "status": "up and running"
    })
} )

app.listen(
    PORT,
    () => console.log('Its alive on PORT: '+ PORT)
)