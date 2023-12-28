const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())
jsonGames = [
    {"title": "Masefeh", "date": "28 dec"},
    {"title": "Beer Run", "date": "28 dec"},
    {"title": "Hire Me!", "date": "28 dec"},
    {"title": "Christmas Present", "date": "28 dec"},
    {"title": "Hypersomnia", "date": "28 dec"},
    {"title": "Mortadelo y Filemón: La Sexta Secta", "date": "29 dec"},
    {"title": "Ancient Spirits: Columbu's Legacy", "date": "29 dec"},
    {"title": "Barely Racing", "date": "29 dec"}
]


app.get('/games', (req, res) => {
    res.status(200).send(jsonGames)
} )

app.get('/ping', (req, res) => {
    res.status(200).send({
        "status": "up and running"
    })
} )

app.listen(
    PORT,
    () => console.log('Its alive on http://localhost:'+ PORT)
)