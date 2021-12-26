const uuid = require('uuid')
const path = require('path')
const {Device, User, Userdata, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
const db = require('../dbPool')
const typeDateStart = require('../startChamp/TypeDateStart')
const moment = require('moment', 'moment-precise-range-plugin')
require('moment-precise-range-plugin')
const jwt = require('jsonwebtoken')
const authMiddleware = require('../middleware/authMiddleware')
const sharp = require('sharp');
const fs = require('fs');
const {One_on_one, Chat} = require("../models/models");
const usersMessages = []

class Lobby {

    intervalLobby(aWss){
        setInterval(()=> this.getWsClients(aWss), 5000)
    }

    getWsClients(aWss){
        const clientsMessage = []
        aWss.clients.forEach(client => {
            clientsMessage.push(client.username)
        })
        let clientsNoRepeatUsers = [...new Set(clientsMessage)];
        aWss.clients.forEach(client => {
            client.send(JSON.stringify({method:'online', clientsNoRepeatUsers}))
        })
    }

    async webSocketFunction(msg, aWss, ws) {
        switch (msg.method) {
            case "connection":
                this.connectionHandler(ws, msg, aWss)
                var one_on_one = await One_on_one.findAll()
                aWss.clients.forEach(client => {
                    client.send(JSON.stringify({method:'game', one_on_one}))
                })
                var chat = await Chat.findAll()
                aWss.clients.forEach(client => {
                    client.send(JSON.stringify({method:'draw', chat}))
                })
                break
            case "draw":
                await Chat.create({username:msg.username, message:msg.message, date:msg.date});
                var chat = await Chat.findAll()
                aWss.clients.forEach(client => {
                    client.send(JSON.stringify({method:'draw', chat}))
                })
                //this.broadcastConnection(ws, msg, aWss)
                break
            case "game":
                await One_on_one.create({username:msg.username, game:msg.game, description:msg.description, amount:msg.amount, time:msg.time});
                var one_on_one = await One_on_one.findAll()
                aWss.clients.forEach(client => {
                    client.send(JSON.stringify({method:'game', one_on_one}))
                })
                break
        }
    }

    connectionHandler = (ws, msg, aWss) => {
        ws.id = msg.id
        ws.username = msg.username
        this.broadcastConnection(ws, msg, aWss)
    }

    broadcastConnection = (ws, msg, aWss) => {
        aWss.clients.forEach(client => {
            if (client.id === msg.id) {
                client.send(JSON.stringify(msg))
            }
        })
    }

}

module.exports = new Lobby()
