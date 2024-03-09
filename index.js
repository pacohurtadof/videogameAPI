const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

jsonGamesMonth = [
    {"title": "Captain Velvet Meteor: The Jump+ Dimensions", "date": "2024-03-01", "platform": ["PC", "Switch", "XBX/S"]},
    {"title": "Guardsi", "date": "2024-03-01", "platform": ["PC"]},
    {"title": "The Mobius Machine", "date": "2024-03-01", "platform": ["PC"]},
    {"title": "U-four-ia: The Saga 2", "date": "2024-03-01", "platform": ["PC", "PS5", "Switch", "XBX/S"]},
    {"title": "Microcosmum 2", "date": "2024-03-02", "platform": ["PC"]},
    {"title": "Bullet Bunny", "date": "2024-03-04", "platform": ["PC"]},
    {"title": "Crusader Kings 3: Legends of the Dead", "date": "2024-03-04", "platform": ["PC"]},
    {"title": "Sixty Four", "date": "2024-03-04", "platform": ["PC"]},
    {"title": "Space Will", "date": "2024-03-04", "platform": ["PC"]},
    {"title": "The Thaumaturge", "date": "2024-03-04", "platform": ["PC"]},
    {"title": "Classified: France '44", "date": "2024-03-05", "platform": ["PC", "PS5", "XBX/S"]},
    {"title": "Disco Simulator", "date": "2024-03-05", "platform": ["PC"]},
    {"title": "Expeditions: A MudRunner Game", "date": "2024-03-05", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Kingdom: The Blood", "date": "2024-03-05", "platform": ["PC"]},
    {"title": "The Outlast Trials", "date": "2024-03-05", "platform": ["PC", "PS5", "PS4", "XBX/S", "XBO"]},
    {"title": "Quilts and Cats of Calico", "date": "2024-03-05", "platform": ["PC"]},
    {"title": "Backrooms Rec.", "date": "2024-03-06", "platform": ["PC"]},
    {"title": "Berserk Boy", "date": "2024-03-06", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Cat and Ghostly Road", "date": "2024-03-06", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Hex Gambit: Respawned", "date": "2024-03-06", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Reveil", "date": "2024-03-06", "platform": ["PC", "PS5", "PS4", "XBX/S", "XBO"]},
    {"title": "United Penguin Kingdom", "date": "2024-03-06", "platform": ["PC"]},
    {"title": "Winter Survival", "date": "2024-03-06", "platform": ["PC"]},
    {"title": "Yolk Heroes: A Long Tamago", "date": "2024-03-06", "platform": ["PC"]},
    {"title": "A Twisted Tale", "date": "2024-03-07", "platform": ["PC"]},
    {"title": "Blade Prince Academy", "date": "2024-03-07", "platform": ["PC"]},
    {"title": "Chasing the Unseen", "date": "2024-03-07", "platform": ["PC"]},
    {"title": "Hearts of Iron 4: Trial of Allegiance", "date": "2024-03-07", "platform": ["PC"]},
    {"title": "Potions: A Curious Tale", "date": "2024-03-07", "platform": ["PC"]},
    {"title": "Snufkin: Melody of Moominvalley", "date": "2024-03-07", "platform": ["PC"]},
    {"title": "Taxi Life: A City Driving Simulator", "date": "2024-03-07", "platform": ["PC", "PS5", "XBX/S"]},
    {"title": "Time to Morp", "date": "2024-03-07", "platform": ["PC"]},
    {"title": "Top Racer Collection", "date": "2024-03-07", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Zoria: Age of Shattering", "date": "2024-03-07", "platform": ["PC"]},
    {"title": "9 Days", "date": "2024-03-08", "platform": ["PC"]},
    {"title": "Ancient Weapon Holly", "date": "2024-03-08", "platform": ["PC", "PS5", "PS4", "Switch"]},
    {"title": "Backpack Battles", "date": "2024-03-08", "platform": ["PC"]},
    {"title": "Bore Blasters", "date": "2024-03-08", "platform": ["PC"]},
    {"title": "Eldgear", "date": "2024-03-08", "platform": ["PC", "Switch", "XBX/S"]},
    {"title": "Stilt", "date": "2024-03-08", "platform": ["PC", "PS5"]},
    {"title": "Summerhouse", "date": "2024-03-08", "platform": ["PC"]},
    {"title": "Tales of Morrow", "date": "2024-03-08", "platform": ["PC"]},
    {"title": "WWE 2K24", "date": "2024-03-08", "platform": ["PC", "PS5", "PS4", "XBX/S", "XBO"]},
    {"title": "United Penguin Kingdom", "date": "2024-03-09", "platform": ["PC"]},
    {"title": "Antipaint", "date": "2024-03-11", "platform": ["PC"]},
    {"title": "Death of a Wish", "date": "2024-03-11", "platform": ["PC"]},
    {"title": "Death Trick: Double Blind", "date": "2024-03-11", "platform": ["PC"]},
    {"title": "Hellbreach: Vegas", "date": "2024-03-11", "platform": ["PC"]},
    {"title": "Renaissance Kingdom Wars", "date": "2024-03-11", "platform": ["PC"]},
    {"title": "Retrowave World", "date": "2024-03-11", "platform": ["PC"]},
    {"title": "Stellar Settlers: Space Base Builder", "date": "2024-03-11", "platform": ["PC"]},
    {"title": "Chinese Empire", "date": "2024-03-12", "platform": ["PC"]},
    {"title": "Contra: Operation Galuga", "date": "2024-03-12", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Goblin Stone", "date": "2024-03-12", "platform": ["PC"]},
    {"title": "No Love Lost", "date": "2024-03-12", "platform": ["PC"]},
    {"title": "Passing By - A Tailwind Journey", "date": "2024-03-12", "platform": ["PC", "Switch"]},
    {"title": "Slavania", "date": "2024-03-12", "platform": ["PC"]},
    {"title": "Subterrain: Mines of Titan", "date": "2024-03-12", "platform": ["PC"]},
    {"title": "Tribes 3: Rivals", "date": "2024-03-12", "platform": ["PC"]},
    {"title": "Llamasoft: The Jeff Minter Story", "date": "2024-03-13", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Crown Wars: The Black Prince", "date": "2024-03-14", "platform": ["PC", "PS5", "Switch", "XBX/S"]},
    {"title": "Highwater", "date": "2024-03-14", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Paint the Town Red VR", "date": "2024-03-14", "platform": ["PC"]},
    {"title": "Star Wars: Battlefront Classic Collection", "date": "2024-03-14", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Rebel Transmute", "date": "2024-03-14", "platform": ["PC"]},
    {"title": "Buckshot Roulette", "date": "2024-03-15", "platform": ["PC"]},
    {"title": "Elteria Adventures", "date": "2024-03-15", "platform": ["PC"]},
    {"title": "Esports Godfather", "date": "2024-03-15", "platform": ["PC"]},
    {"title": "Never Mourn", "date": "2024-03-15", "platform": ["PC"]},
    {"title": "Oh Deer", "date": "2024-03-15", "platform": ["PC"]},
    {"title": "Outcast: A New Beginning", "date": "2024-03-15", "platform": ["PC", "PS5", "XBX/S"]},
    {"title": "Out of the Park Baseball 25", "date": "2024-03-15", "platform": ["PC"]},
    {"title": "PJ Masks Power Heroes: Mighty Alliance", "date": "2024-03-15", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "KinnikuNeko: SUPER MUSCLE CAT", "date": "2024-03-19", "platform": ["PC"]},
    {"title": "Lightyear Frontier", "date": "2024-03-19", "platform": ["PC", "XBX/S"]},
    {"title": "Raw Metal", "date": "2024-03-19", "platform": ["PC"]},
    {"title": "Alone in the Dark", "date": "2024-03-20", "platform": ["PC", "PS5", "XBX/S"]},
    {"title": "Master Maker 3D Ultimate", "date": "2024-03-20", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Scott Whiskers in: the Search for Mr. Fumbleclaw", "date": "2024-03-20", "platform": ["PC", "Switch"]},
    {"title": "Horizon Forbidden West: Complete Edition", "date": "2024-03-21", "platform": ["PC"]},
    {"title": "Krimson", "date": "2024-03-21", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Renaissance Kingdom Wars", "date": "2024-03-21", "platform": ["PC"]},
    {"title": "4D Golf", "date": "2024-03-22", "platform": ["PC"]},
    {"title": "Bears In Space", "date": "2024-03-22", "platform": ["PC"]},
    {"title": "Breachway", "date": "2024-03-22", "platform": ["PC"]},
    {"title": "Dragon's Dogma 2", "date": "2024-03-22", "platform": ["PC", "PS5", "XBX/S"]},
    {"title": "The Legend of Legacy HD Remastered", "date": "2024-03-22", "platform": ["PC", "PS5", "PS4", "Switch"]},
    {"title": "Reverse Collapse: Code Name Bakery", "date": "2024-03-22", "platform": ["PC"]},
    {"title": "Acolyte of the Altar", "date": "2024-03-25", "platform": ["PC"]},
    {"title": "Between Horizons", "date": "2024-03-25", "platform": ["PC"]},
    {"title": "Sentry", "date": "2024-03-25", "platform": ["PC"]},
    {"title": "Bulwark: Falconeer Chronicles", "date": "2024-03-26", "platform": ["PC", "PS5", "PS4", "XBX/S", "XBO"]},
    {"title": "ENDER MAGNOLIA: Bloom in the mist", "date": "2024-03-26", "platform": ["PC"]},
    {"title": "Go Fight Fantastic", "date": "2024-03-26", "platform": ["PC"]},
    {"title": "Millennia", "date": "2024-03-26", "platform": ["PC"]},
    {"title": "Outpost: Infinity Siege", "date": "2024-03-26", "platform": ["PC"]},
    {"title": "South Park: Snow Day!", "date": "2024-03-26", "platform": ["PC", "PS5", "Switch", "XBX/S"]},
    {"title": "AutoForge", "date": "2024-03-27", "platform": ["PC"]},
    {"title": "Brocula", "date": "2024-03-27", "platform": ["PC"]},
    {"title": "Distant Bloom", "date": "2024-03-27", "platform": ["PC"]},
    {"title": "Level Unknown: Backrooms", "date": "2024-03-27", "platform": ["PC"]},
    {"title": "Necrosmith 2", "date": "2024-03-27", "platform": ["PC"]},
    {"title": "Cozynauts", "date": "2024-03-28", "platform": ["PC"]},
    {"title": "Godsworn", "date": "2024-03-28", "platform": ["PC"]},
    {"title": "Maniac", "date": "2024-03-28", "platform": ["PC"]},
    {"title": "Mars 2120", "date": "2024-03-28", "platform": ["PC", "Switch"]},
    {"title": "Open Roads", "date": "2024-03-28", "platform": ["PC", "PS5", "PS4", "Switch", "XBX/S", "XBO"]},
    {"title": "Pepper Grinder", "date": "2024-03-28", "platform": ["PC", "Switch"]},
    {"title": "Vellum", "date": "2024-03-28", "platform": ["PC"]},
    {"title": "Winning Post 10 2024", "date": "2024-03-28", "platform": ["PC", "PS5", "PS4", "Switch"]},
    {"title": "Denizen", "date": "2024-03-29", "platform": ["PC"]},
    {"title": "Felvidek", "date": "2024-03-29", "platform": ["PC"]},
    {"title": "Omega Crafter", "date": "2024-03-29", "platform": ["PC"]},
    {"title": "Spring Dash", "date": "2024-03-29", "platform": ["PC"]}
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