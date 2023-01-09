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
        'mainClassLevel': 70,
        'subClass': 'Force',
        'subClassLevel': 70,
        'playerBiology': 'At a young age she had her DNA altered in order to become close to Photoners and Darkers. The project failed and the Lillipans abandoned the research leaving Polymath with permanent marks on her whole body. After many years she learn how to control her powers and began a new journey to stop the very being her DNA was mixed with.'
    },
    'RumbleSnake':{
        'playerId': 'RumbleSnake',
        'mainClass': 'Force',
        'mainClassLevel': 70,
        'subClass': 'Techer',
        'subClassLevel': 65,
        'playerBiology': 'Insert'
    },
    'Myntii':{
        'playerId': 'Wumbology',
        'mainClass': 'Ranger',
        'mainClassLevel': 70,
        'subClass': 'Force',
        'subClassLevel': 65,
        'playerBiology': 'Insert'
    },
    'Hunter JG':{
        'playerId': 'Ran',
        'mainClass': 'Bouncer',
        'mainClassLevel': 60,
        'subClass': 'Force',
        'subClassLevel': 55,
        'playerBiology': 'When she was little, she was saved by an arks operative, so she decided to be an arks operative when she was older, so she could help other people the way that arks operative helped her'
    },
    'Iniquity。':{
        'playerId': 'Calamity',
        'mainClass': 'Braver',
        'mainClassLevel': 70,
        'subClass': 'Force',
        'subClassLevel': 70,
        'playerBiology': 'After witnessing her parants murder at a young age, she was raised by a gang led by the very man responsible. She became talented at being an assassin by the age of 16. One day everything suddently fallen apart and before she knew it she was fighting alone. She had one last mission; kill the man who took everything from her.'
    },
    'INFAMOUS_FOX':{
        'playerId': 'INFAMOUS',
        'mainClass': 'Hunter',
        'mainClassLevel': 70,
        'subClass': 'Fighter',
        'subClassLevel': 70,
        'playerBiology': 'INFAMOUS WANTED TO BE A GHOST, YET HIS OWN FRIENDS BETRAYED HIM BY DRESSING HIM UP MORE AND MORE LIKE SISTERS WHO DRESS UP THEIR YOUNGER BROTHER. NOW HE BECOMES THE VERY THING HIS FRIENDS THOUGHT WAS FUNNY, BUT CAN NO LONGER FORGET. HIS TRUE FACE IS NOW A MYSTERY LONG FORGOTTON TO A TIME INFAMOUS WAS HAPPY FOR THE LAST TIME.'
    },
    'strato toran':{
        'playerId': 'Katori',
        'mainClass': 'Braver',
        'mainClassLevel': 70,
        'subClass': 'Bouncer',
        'subClassLevel': 70,
        'playerBiology': 'Kotori has no clue why she is on the planet. Everyone who has been dropping down seems to lose thier memory. All she does seem to know that shes looking for someone who starts with a "T" and ends with "N". She also realizes that shes somewhat stronger then most in terms of melee and techniques, but bad at range weapons. It also seems that memories are coming back. Who knows where journey will take her.'
    },
    'BabyPeachies':{
        'playerId': 'BabyPeachies',
        'mainClass': 'Force',
        'mainClassLevel': 70,
        'subClass': 'Bouncer',
        'subClassLevel': 70,
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

app.get('/', (request, response)=>{
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