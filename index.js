const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

app.get('/games', (req, res) => {
    res.status(200).send({
        games:"uncharted, rayman",
        count: 2
    })
} )

app.listen(
    PORT,
    () => console.log('Its alive on http://localhost:'+ PORT)
)