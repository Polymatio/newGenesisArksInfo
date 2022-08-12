const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 1111

app.use(cors())

// Creating Objects for PSO2 NGS ARKS ID,
// It will be used for searching players.

const arksId = {
    'Polymath':{
        'mainCharacter': 'Polymath',
        'mainClass': 'Gunner',
        'mainClassLevel': 60,
        'subClass': 'Force',
        'subClassLevel': 60
    },
    'rumbleSnake':{
        'mainCharacter': 'rumbleSnake',
        'mainClass': 'Force',
        'mainClassLevel': 60,
        'subClass': 'Techer',
        'subClassLevel': 60
    },
    'Mytixx':{
        'mainCharacter': 'Wumbology',
        'mainClass': 'Ranger',
        'mainClassLevel': 60,
        'subClass': 'Force',
        'subClassLevel': 55
    },
    'HunterJG':{
        'mainCharacter': 'Ran',
        'mainClass': 'Bouncer',
        'mainClassLevel': 60,
        'subClass': 'Force',
        'subClassLevel': 55
    },
    'inquity':{
        'mainCharacter': 'Calamity',
        'mainClass': 'Braver',
        'mainClassLevel': 60,
        'subClass': 'Force',
        'subClassLevel': 60
    },
    'INFAMOUS':{
        'mainCharacter': 'INFAMOUS',
        'mainClass': 'Hunter',
        'mainClassLevel': 20,
        'subClass': 'Fighter',
        'subClassLevel': 20
    },
    'expz':{
        'mainCharacter': 'ExpZ',
        'mainClass': 'Force',
        'mainClassLevel': 60,
        'subClass': 'Gunner',
        'subClassLevel': 60
    },
    'rappy':{
        'maincharacter': 'Rappy',
        'mainClass': 'Rappy',
        'mainClassLevel': 999,
        'subClass': 'Rappy',
        'subClassLevel': 999
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
    if(arksId[arksName]){
        response.json(arksId[arksName])
    }else{
        response.json(arksId['rappy'])
    }
})

// Uses environment PORT by using env file to process.

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Hurry up before Dark Falz takes you 3 digits on the back!`)
})