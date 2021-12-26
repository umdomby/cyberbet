require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')
const app = express();
//const WS = require('ws');
const WSServer = require('express-ws')(app);
const aWss = WSServer.getWss()
const wsLobby = require('./webSocket/lobby')

const qiwiStatus = require('./database/qiwiStatus')
const m = qiwiStatus()
m.showMessage()

// const startChamp = require('./startChamp/startChamp')
// //console.log('MODULE', startChamp('Hello World'))
// const m = startChamp('Hello World')
// m.dateMinutesStopLap().then()
// m.showMessage()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.static('static'))


app.use(fileUpload({}))

// Обработка ошибок, последний Middleware
app.use(errorHandler)

app.use('/api', router)
wsLobby.intervalLobby(aWss)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.ws('/ws/lobby', (ws, req) => {
            ws.on('message', (msg) => {
                msg = JSON.parse(msg)
                wsLobby.webSocketFunction(msg, aWss, ws)

                // switch (msg.method) {
                //     case "connection":
                //         connectionHandler(ws, msg)
                //         break
                //     case "draw":
                //         broadcastConnection(ws, msg)
                //         break
                // }
            })
        })

        app.listen(PORT,  () => console.log(`Server started on port ${PORT}`))

        // app.post('/ws/image', (req, res) => {
        //     try {
        //         let {id} = req.query
        //         let {username, message, method, idDate} = req.body
        //         res.json({id, username, message, method, idDate})
        //     } catch (e) {
        //         console.log(e)
        //         return res.status(500).json('error')
        //     }
        // })
        // app.get('/ws/image', (req, res) => {
        //     try {
        //         let {id} = req.query
        //         res.json({id})
        //     } catch (e) {
        //         console.log(e)
        //         return res.status(500).json('error')
        //     }
        // })

        // const connectionHandler = (ws, msg) => {
        //     ws.id = msg.id
        //     broadcastConnection(ws, msg)
        // }
        //
        // const broadcastConnection = (ws, msg) => {
        //     aWss.clients.forEach(client => {
        //         if (client.id === msg.id) {
        //             client.send(JSON.stringify(msg))
        //         }
        //     })
        // }

    } catch (e) {
        console.log(e + " index")
    }
}

start()
