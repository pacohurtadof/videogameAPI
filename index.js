const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

jsonGamesMonth = [
    {"title": "Boxes: Lost Fragments", "date": "2024-02-01", "platform": ["PC"]},
    {"title": "Jujutsu Kaisen: Cursed Clash", "date": "2024-02-02", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Legendary Hoplite", "date": "2024-02-02", "platform": ["PC"]},
    {"title": "Persona 3 Reload", "date": "2024-02-02", "platform": ["PC", "XBX/S"]},
    {"title": "Suicide Squad: Kill the Justice League", "date": "2024-02-02", "platform": ["PC", "PS5", "XBX/S"]},
    {"title": "Tales of Spark", "date": "2024-02-05", "platform": ["PC"]},
    {"title": "Alisa: Developer's Cut", "date": "2024-02-06", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Arms Trade Tycoon: Tanks", "date": "2024-02-06", "platform": ["PC"]},
    {"title": "CLeM", "date": "2024-02-06", "platform": ["PC"]},
    {"title": "Vampire: The Masquerade - Justice", "date": "2024-02-06", "platform": ["PC"]},
    {"title": "WitchHand", "date": "2024-02-07", "platform": ["PC"]},
    {"title": "Helldivers 2", "date": "2024-02-08", "platform": ["PC"]},
    {"title": "The Inquisitor", "date": "2024-02-08", "platform": ["PC"]},
    {"title": "KONOSUBA - God's Blessing on this Wonderful World! Love For These Clothes Of Desire!", "date": "2024-02-08", "platform": ["PC", "PS4", "Switch"]},
    {"title": "Touhou Danmaku Kagura Phantasia Lost", "date": "2024-02-08", "platform": ["PC"]},
    {"title": "Airhead", "date": "2024-02-12", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Arzette: The Jewel of Faramore", "date": "2024-02-13", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Banishers: Ghosts of New Eden", "date": "2024-02-13", "platform": ["PC", "PS5", "XBX/S"]},
    {"title": "Fight Crab 2", "date": "2024-02-13", "platform": ["PC"]},
    {"title": "News Tower", "date": "2024-02-13", "platform": ["PC"]},
    {"title": "Islands of Insight", "date": "2024-02-13", "platform": ["PC"]},
    {"title": "Lysfanga: The Time Shift Warrior", "date": "2024-02-13", "platform": ["PC"]},
    {"title": "Ultros", "date": "2024-02-13", "platform": ["PC"]},
    {"title": "Solium Infernum", "date": "2024-02-14", "platform": ["PC"]},
    {"title": "Tomb Raider I-III Remastered Starring Lara Croft", "date": "2024-02-14", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Colonize", "date": "2024-02-15", "platform": ["PC"]},
    {"title": "Gunvolt Records Cychronicle", "date": "2024-02-15", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Helskate", "date": "2024-02-15", "platform": ["PC"]},
    {"title": "Level Unknown: Backrooms", "date": "2024-02-15", "platform": ["PC"]},
    {"title": "Party Party Time 2", "date": "2024-02-15", "platform": ["PC", "Switch"]},
    {"title": "Spirit Hunter: Death Mark 2", "date": "2024-02-15", "platform": ["PC", "PS5", "PS4", "Switch"]},
    {"title": "Survivorman VR: The Descent", "date": "2024-02-15", "platform": ["PC"]},
    {"title": "Nie No Hakoniwa - Dollhouse of Offerings", "date": "2024-02-16", "platform": ["PC"]},
    {"title": "Recolit", "date": "2024-02-16", "platform": ["PC"]},
    {"title": "Skull And Bones", "date": "2024-02-16", "platform": ["PC", "PS5", "XBX/S"]},
    {"title": "Craftomation 101: Programming & Craft", "date": "2024-02-19", "platform": ["PC"]},
    {"title": "Balatro", "date": "2024-02-20", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Furnish Master", "date": "2024-02-20", "platform": ["PC"]},
    {"title": "Irem Collection Volume 2", "date": "2024-02-20", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S"]},
    {"title": "Lazaret", "date": "2024-02-20", "platform": ["PC"]},
    {"title": "Le Mans Ultimate", "date": "2024-02-20", "platform": ["PC"]},
    {"title": "qomp2", "date": "2024-02-20", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S"]},
    {"title": "The Thaumaturge", "date": "2024-02-20", "platform": ["PC"]},
    {"title": "TUS", "date": "2024-02-20", "platform": ["PC"]},
    {"title": "Bandle Tale: A League of Legends Story", "date": "2024-02-21", "platform": ["PC"]},
    {"title": "Feed the Cups", "date": "2024-02-21", "platform": ["PC"]},
    {"title": "Slave Zero X", "date": "2024-02-21", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Terminator: Dark Fate - Defiance", "date": "2024-02-21", "platform": ["PC"]},
    {"title": "CorpoNation: The Sorting Process", "date": "2024-02-22", "platform": ["PC"]},
    {"title": "Garden Life: A Cozy Simulator", "date": "2024-02-22", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Nightingale", "date": "2024-02-22", "platform": ["PC"]},
    {"title": "Pacific Drive", "date": "2024-02-22", "platform": ["PC", "PS5"]},
    {"title": "Plane Accident", "date": "2024-02-22", "platform": ["PC"]},
    {"title": "Retrowave World", "date": "2024-02-22", "platform": ["PC"]},
    {"title": "The Tribe Must Survive", "date": "2024-02-22", "platform": ["PC"]},
    {"title": "Yohane the Parhelion - NUMAZU in the MIRAGE -", "date": "2024-02-22", "platform": ["PC"]},
    {"title": "Primitive Society Simulator", "date": "2024-02-26", "platform": ["PC"]},
    {"title": "Twilight Wars", "date": "2024-02-26", "platform": ["PC"]},
    {"title": "Backrooms Break", "date": "2024-02-27", "platform": ["PC"]},
    {"title": "Builders of Greece", "date": "2024-02-27", "platform": ["PC"]},
    {"title": "Piczle Cross: Story of Seasons", "date": "2024-02-27", "platform": ["PC", "Switch"]},
    {"title": "Brothers: A Tale of Two Sons", "date": "2024-02-28", "platform": ["PC", "PS5", "XBX/S"]},
    {"title": "Minami Lane", "date": "2024-02-28", "platform": ["PC"]},
    {"title": "Primitive Environment Survival", "date": "2024-02-28", "platform": ["PC"]},
    {"title": "Primitive Environment Survival", "date": "2024-02-28", "platform": ["PC"]},
    {"title": "Star Wars: Dark Forces Remaster", "date": "2024-02-28", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Winter Survival", "date": "2024-02-28", "platform": ["PC"]},
    {"title": "The Brew Barons", "date": "2024-02-29", "platform": ["PC"]},
    {"title": "Goblin Slayer -Another Adventurer- Nightmare Feast", "date": "2024-02-29", "platform": ["PC"]},
    {"title": "Welcome to ParadiZe", "date": "2024-02-29", "platform": ["PC", "PS5", "XBX/S"]}

]



app.get('/getWeekGames', (req, res) => {
    today = new Date();
    var futureDate = new Date();
    futureDate.setDate(today.getDate() + 7);
    let weeklyGames = []
    jsonGamesMonth.forEach(element => {
        let formattedDate = new Date(element.date);
        //console.log(element.date, formattedDate > today && formattedDate < futureDate)
        if (formattedDate > today && formattedDate < futureDate) {
            weeklyGames.push(element)
        }
    });
    res.status(200).send(weeklyGames)
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