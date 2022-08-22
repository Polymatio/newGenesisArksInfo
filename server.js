const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 1111

app.use(cors())

// Creating Objects for PSO2 NGS ARKS ID,
// It will be used for searching players.

const arksCard = {
    'Polymath':{
        'playerId': 'Polymath',
        'mainClass': 'Gunner',
        'mainClassLevel': 60,
        'subClass': 'Force',
        'subClassLevel': 60,
        'playerBiology': 'Insert'
    },
    'RumbleSnake':{
        'playerId': 'RumbleSnake',
        'mainClass': 'Force',
        'mainClassLevel': 60,
        'subClass': 'Techer',
        'subClassLevel': 60,
        'playerBiology': 'Insert'
    },
    'Myntii':{
        'playerId': 'Wumbology',
        'mainClass': 'Ranger',
        'mainClassLevel': 60,
        'subClass': 'Force',
        'subClassLevel': 55,
        'playerBiology': 'Insert'
    },
    'Hunter JG':{
        'playerId': 'Ran',
        'mainClass': 'Bouncer',
        'mainClassLevel': 60,
        'subClass': 'Force',
        'subClassLevel': 55,
        'playerBiology': 'Insert'
    },
    'Iniquity。':{
        'playerId': 'Calamity',
        'mainClass': 'Braver',
        'mainClassLevel': 60,
        'subClass': 'Force',
        'subClassLevel': 60,
        'playerBiology': 'Insert'
    },
    'INFAMOUS_FOX':{
        'playerId': 'INFAMOUS',
        'mainClass': 'Hunter',
        'mainClassLevel': 20,
        'subClass': 'Fighter',
        'subClassLevel': 20,
        'playerBiology': 'Insert'
    },
    'ExplodeZ':{
        'playerId': 'ExpZ',
        'mainClass': 'Force',
        'mainClassLevel': 60,
        'subClass': 'Gunner',
        'subClassLevel': 60,
        'playerBiology': 'Insert'
    },
    'strato toran':{
        'playerId': 'Katori',
        'mainClass': 'Braver',
        'mainClassLevel': 60,
        'subClass': 'Bouncer',
        'subClassLevel': 60,
        'playerBiology': 'Insert'
    },
    'BabyPeachies':{
        'playerId': 'BabyPeachies',
        'mainClass': 'Force',
        'mainClassLevel': 60,
        'subClass': 'Bouncer',
        'subClassLevel': 60,
        'playerBiology': 'Insert'
    },
    'Caregiver':{
        'playerId': 'Mercury',
        'mainClass': 'Force',
        'mainClassLevel': 60,
        'subClass': 'Techer',
        'subClassLevel': 60,
        'playerBiology': 'Insert'
    },
    'EternalFlames':{
        'playerId': 'アリス',
        'mainClass': 'Braver',
        'mainClassLevel': 60,
        'subClass': 'Hunter',
        'subClassLevel': 60,
        'playerBiology': 'Insert'
    },
    'Eternity516':{
        'playerId': 'Alicia',
        'mainClass': 'Gunner',
        'mainClassLevel': 60,
        'subClass': 'Hunter',
        'subClassLevel': 55,
        'playerBiology': 'Insert'
    },
    'ShadowV3nom':{
        'playerId': 'ShadowVenom',
        'mainClass': 'Waker',
        'mainClassLevel': 60,
        'subClass': 'Force',
        'subClassLevel': 55,
        'playerBiology': 'Insert'
    },
    'やrotagonist':{
        'playerId': 'Ash',
        'mainClass': 'Braver',
        'mainClassLevel': 60,
        'subClass': 'Force',
        'subClassLevel': 60,
        'playerBiology': 'Insert'
    },
    'rappy':{
        'maincharacter': 'Rappy',
        'mainClass': 'Rappy',
        'mainClassLevel': 999,
        'subClass': 'Rappy',
        'subClassLevel': 999,
        'playerBiology': 'Insert'
    }
}

// Server file will send send files onto HTML file.

app.get('/', (resquest, response)=>{
    response.sendFile(__dirname + '/index.html')
})

// Server will get the IDs of the player ARKS card.
// It will use conditional to display Player information.

app.get('/api/:arksName', (request,response)=>{
    const arksName = request.params.arksName.toLowerCase()
    if(arksCard[arksName]){
        response.json(arksCard[arksName])
    }else{
        response.json(arksCard['rappy'])
    }
})

// Uses environment PORT by using env file to process.

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Hurry up before Dark Falz takes you 3 digits on the back!`)
})