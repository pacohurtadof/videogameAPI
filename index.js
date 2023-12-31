const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())
jsonGamesWeek = [
    {"title": "Palworld", "date": "2023-01-01", "platform": ["PC"]},
    {"title": "Ineth", "date": "2023-01-01", "platform": ["PC"]},
    {"title": "Open Air", "date": "2023-01-01", "platform": ["PC"]},
    {"title": "Portal Revolution", "date": "2023-01-05", "platform": ["PC"]},
    {"title": "Shivering Stone", "date": "2023-01-05", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Tools Up! Ultimate Edition", "date": "2023-01-05", "platform": ["PC", "PS4", "Switch", "XBO"]}
]

jsonGamesMonth = [
    {"title": "Palworld", "date": "2024-01-01", "platform": ["PC"]},
    {"title": "Ineth", "date": "2024-01-01", "platform": ["PC"]},
    {"title": "Open Air", "date": "2024-01-01", "platform": ["PC"]},
    {"title": "Portal Revolution", "date": "2024-01-05", "platform": ["PC"]},
    {"title": "Shivering Stone", "date": "2024-01-05", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Tools Up! Ultimate Edition", "date": "2024-01-05", "platform": ["PC", "PS4", "Switch", "XBO"]},
    {"title": "Archaelund", "date": "2024-01-08", "platform": ["PC"]},
    {"title": "Supernormal", "date": "2024-01-08", "platform": ["PC"]},
    {"title": "Beer Factory", "date": "2024-01-10", "platform": ["PC"]},
    {"title": "Buriedbornes2 - Dungeon RPG -", "date": "2024-01-10", "platform": ["PC"]},
    {"title": "Ikkarus and the Prince of Sin", "date": "2024-01-10", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Momodora: Moonlit Farewell", "date": "2024-01-11", "platform": ["PC"]},
    {"title": "Radiance", "date": "2024-01-11", "platform": ["PC"]},
    {"title": "Top Racer Collection", "date": "2024-01-11", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "War Hospital", "date": "2024-01-11", "platform": ["PC", "PS5", "XBX/S"]},
    {"title": "Computer Repair Shop", "date": "2024-01-12", "platform": ["PC"]},
    {"title": "Shinorubi", "date": "2024-01-12", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Sovereign Syndicate", "date": "2024-01-15", "platform": ["PC"]},
    {"title": "Time Survivors", "date": "2024-01-15", "platform": ["PC"]},
    {"title": "Contain", "date": "2024-01-16", "platform": ["PC"]},
    {"title": "Toy Trains", "date": "2024-01-16", "platform": ["PC", "PS5"]},
    {"title": "All Quiet in the Trenches", "date": "2024-01-17", "platform": ["PC"]},
    {"title": "Dominions 6 - Rise of the Pantokrator", "date": "2024-01-17", "platform": ["PC"]},
    {"title": "Bulletstorm VR", "date": "2024-01-18", "platform": ["PC", "PS5"]},
    {"title": "Fractured Veil", "date": "2024-01-18", "platform": ["PC"], "status": "Early Access"},
    {"title": "Lonestar", "date": "2024-01-18", "platform": ["PC"]},
    {"title": "New Cycle", "date": "2024-01-18", "platform": ["PC"]},
    {"title": "Prince of Persia: The Lost Crown", "date": "2024-01-18", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Turnip Boy Robs a Bank", "date": "2024-01-18", "platform": ["PC", "Switch", "XBO"]},
    {"title": "The Cub", "date": "2024-01-19", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Retrowave World", "date": "2024-01-19", "platform": ["PC"]},
    {"title": "Stargate: Timekeepers", "date": "2024-01-23", "platform": ["PC"]},
    {"title": "Anomaly Agent", "date": "2024-01-24", "platform": ["PC"]},
    {"title": "Enshrouded", "date": "2024-01-24", "platform": ["PC"]},
    {"title": "Roots of Yggdrasil", "date": "2024-01-24", "platform": ["PC"]},
    {"title": "Apollo Justice: Ace Attorney Trilogy", "date": "2024-01-25", "platform": ["PC", "PS4", "Switch", "XBO"]},
    {"title": "Go Mecha Ball", "date": "2024-01-25", "platform": ["PC", "XBX/S", "XBO"]},
    {"title": "MACROSS Shooting Insight", "date": "2024-01-25", "platform": ["PC", "PS5", "PS4", "Switch"]},
    {"title": "Under Night In-Birth 2 Sys:Celes", "date": "2024-01-25", "platform": ["PC", "PS5", "PS4", "Switch"]},
    {"title": "Unforetold: Witchstone", "date": "2024-01-25", "platform": ["PC"]},
    {"title": "Like a Dragon: Infinite Wealth", "date": "2024-01-26", "platform": ["PC", "PS5", "PS4", "XBX/S", "XBO"]},
    {"title": "Tekken 8", "date": "2024-01-26", "platform": ["PC", "PS5", "XBX/S"]},
    {"title": "Granblue Fantasy: Relink", "date": "2024-01-29", "platform": ["PC", "PS5"]},
    {"title": "The Lost Legends of Redwall: The Scout - Anthology", "date": "2024-01-30", "platform": ["PC", "PS5", "XBX/S"]},
    {"title": "The Quinfall", "date": "2024-01-30", "platform": ["PC"]},
    {"title": "Eastward: Octopia", "date": "2024-01-31", "platform": ["PC", "Switch"]},
    {"title": "Speed Crew", "date": "2024-01-31", "platform": ["PC"]},
    {"title": "Tower Tales", "date": "2024-01-31", "platform": ["PC"]}
]



app.get('/getWeekGames', (req, res) => {
    res.status(200).send(jsonGamesWeek)
} )

app.get('/getMonthGames', (req, res) => {
    res.status(200).send(jsonGamesMonth)
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