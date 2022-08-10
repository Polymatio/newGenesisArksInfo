const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 1111

app.use(cors())

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
    'rappy':{
        'maincharacter': 'Rappy',
        'mainClass': 'Rappy',
        'mainClassLevel': 999,
        'subClass': 'Rappy',
        'subClassLevel': 999
    }
}

app.get('/', (resquest, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:arksName', (request,response)=>{
    const arksName = request.params.arksName.toLowerCase()
    if(arksId[arksName]){
        response.json(arksId[arksName])
    }else{
        response.json(arksId['rappy'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Hurry up before Dark Falz takes you 3 digits on the back!`)
})