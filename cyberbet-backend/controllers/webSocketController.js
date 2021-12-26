require('moment-precise-range-plugin')
const {One_on_one} = require("../models/models");

class WebSocketController {

    async getWebSocket(req, res, next) {
        try {
            // let {id} = req.query

            res.json('lobby')
        } catch (e) {
            console.log(e)
            return res.status(500).json('error')
        }
    }

    async postWebSocket(req, res, next) {
        try {
            let {id} = req.query
            let {username, message, method, idDate} = req.body
            res.json({id, username, message, method, idDate})
        } catch (e) {
            console.log(e)
            return res.status(500).json('error')
        }
    }

    // async postCreateOneOnOne(req, res, next) {
    //     try {
    //         // let {id} = req.query
    //         let {username, game, description, amount, time} = req.body
    //         await One_on_one.create({username, game, description, amount, time});
    //         res.json({username, game, description, amount, time})
    //     } catch (e) {
    //         console.log(e)
    //         return res.status(500).json('error')
    //     }
    // }

    async getCreateOneOnOne(req, res, next) {
        try {
            const one_on_one = await One_on_one.findAll()
            res.json(one_on_one)
        } catch (e) {
            console.log(e)
            return res.status(500).json('error')
        }
    }
}

module.exports = new WebSocketController()
