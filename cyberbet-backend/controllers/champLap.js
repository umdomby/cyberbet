//import moment from "moment";
//import ru from 'moment/locale/ru';
const moment = require('moment', 'moment-precise-range-plugin');

const {Device, User, Userdata, DeviceInfo, Brand, Type} = require('../models/models')
const ApiError = require('../error/ApiError');
const db = require('../dbPool')

const sequelize = require('../db')
const { DataTypes } = require('sequelize');
const queryInterface = sequelize.getQueryInterface();
const typeDateStart = require('../startChamp/TypeDateStart')

class champLap {

    // constructor(msg) {
    //     this.message = msg;
    //     this.dataStart = true;
    //     this.databaseSetLap = true;
    //     this.minutesStopLap = 0
    //     this.message2 ="0"
    // }

    async dateChampLapGo(req, res, next) {
        //const {dated, datedNew} = req.body
        const {dated} = req.body
        try {
            const maxLap = await db.query('SELECT MAX(lap) FROM"' + dated + '"')
            var timeLap = maxLap.rows[0].max
            //await this.champInsertTableLapGo(dated, timeLap, datedNew)
            var champ = []
            var champOpp = []
            const databaseTypeStart = []
            const typesIdChamp = await db.query('SELECT * FROM types WHERE nametype = $1', [dated]) //idType
            //const typesIdChamp = await db.query('SELECT * FROM"' + dated + '"') //idType
            //const sumBrand = await db.query('SELECT * FROM brands')
            const sumBrand = await db.query('SELECT * FROM brands WHERE brands.idname = $1', [typesIdChamp.rows[0].id])
            //var databaseSetLap = true
            var champVarHalf = []
            var champOppHalf = []
            var lastUser = []
            for (var i = 1; i < sumBrand.rows.length + 1; i++) {
                databaseTypeStart[i] = await db.query('SELECT * FROM"' + dated + '"JOIN brands ON "brandId"= brands.id WHERE lap = $1 AND "brandId" = $2', [timeLap, sumBrand.rows[i-1].id])

                if(databaseTypeStart[i].rows.length === 1){
                    for (var a = 0; a < databaseTypeStart[i].rows.length; a++) {
                        if (databaseTypeStart[i].rows[a].userCheck === false) {
                            const a = 0
                            await db.query('INSERT INTO"' + dated + '"("dateGame","champ","lap","lapPoint","devicesId","userId","userdatumId","username","rating","typeId","brandId","userdatumIdOpp","oppUserId","oppUsername","oppRating","oppBrand","brandName","oppCheck") ' +
                                'VALUES (Now(),$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,\'true\')',
                                [dated, timeLap + 1, timeLap * (timeLap + 1), databaseTypeStart[i].rows[0].id, databaseTypeStart[i].rows[a].userId, databaseTypeStart[i].rows[a].userdatumId, databaseTypeStart[i].rows[a].username, databaseTypeStart[i].rows[a].rating, databaseTypeStart[i].rows[a].typeId, databaseTypeStart[i].rows[a].brandId, databaseTypeStart[i].rows[a].userdatumId, databaseTypeStart[i].rows[a].userId, databaseTypeStart[i].rows[a].username, databaseTypeStart[i].rows[a].rating, databaseTypeStart[i].rows[a].brandId, databaseTypeStart[i].rows[a].name])
                            //return res.json(dated)
                        }
                        if (databaseTypeStart[i].rows[a].oppCheck === false) {
                            await db.query('INSERT INTO"' + dated + '"("dateGame","champ","lap","lapPoint","devicesId","userId","userdatumId","username","rating","typeId","brandId","userdatumIdOpp","oppUserId","oppUsername","oppRating","oppBrand","brandName","oppCheck") ' +
                                'VALUES (Now(),$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,\'true\')',
                                [dated, timeLap + 1, timeLap * (timeLap + 1), databaseTypeStart[i].rows[a].id, databaseTypeStart[i].rows[a].oppUserId, databaseTypeStart[i].rows[a].userdatumIdOpp, databaseTypeStart[i].rows[a].oppUsername, databaseTypeStart[i].rows[a].oppRating, databaseTypeStart[i].rows[a].typeId, databaseTypeStart[i].rows[a].brandId, databaseTypeStart[i].rows[a].userdatumIdOpp, databaseTypeStart[i].rows[a].oppUserId, databaseTypeStart[i].rows[a].oppUsername, databaseTypeStart[i].rows[a].oppRating, databaseTypeStart[i].rows[a].brandId, databaseTypeStart[i].rows[a].name])
                            //return res.json(dated)
                        }
                    }
                }

                var databaseSetLap = true
                var champVar = []
                var champVarUser = []
                var champVarOpp = []
                var UO = []
                for (let j = 0; j < databaseTypeStart[i].rows.length; j++) {
                    UO.push(databaseTypeStart[i].rows[j])
                }
                for (let k = 0; k < UO.length; k++) {
                    if (UO[k].userCheck === false) {
                        champVarUser.push(UO[k])
                    }
                }
                for (let k = 0; k < UO.length; k++) {
                    if (UO[k].oppCheck === false) {
                        champVarOpp.push(UO[k])
                    }
                }
                for (let k = 0; k < champVarOpp.length; k++) {
                    champVarOpp[k].userId = champVarOpp[k].oppUserId
                    champVarOpp[k].userdatumId = champVarOpp[k].userdatumIdOpp
                    champVarOpp[k].username = champVarOpp[k].oppUsername
                    champVarOpp[k].rating = champVarOpp[k].oppRating
                    champVarOpp[k].brandId = champVarOpp[k].oppBrand
                }

                champVar = [...champVarUser, ...champVarOpp]
                shuffleArray(champVar)

                if (champVar.length % 2 !== 0 && champVar.length > 2 ) {
                    lastUser.push(champVar.pop())
                }
                if(champVar.length >= 4){
                    champVarHalf = champVar.slice(0, champVar.length / 2)
                    champOppHalf = champVar.slice(champVar.length / 2)
                }else if(champVar.length === 2){
                    champVarHalf = champVar.slice(0, 1)
                    champOppHalf = champVar.slice(1)
                }

                else if(champVar.length === 1 || champVar.length === 0){
                    databaseSetLap = false
                }
                if(databaseSetLap === true) {
                    for (var k = 0; k < champVarHalf.length; k++) {
                        champ.push(champVarHalf[k])
                        champOpp.push(champOppHalf[k])
                    }
                }
            }
            function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }
            console.log("------------0000000000000000------------")
            for (var i = 0; i < champ.length; i++) {
                await db.query('INSERT INTO"' + dated + '"("dateGame","champ","lap","lapPoint","devicesId","userId","userdatumId","username","rating","typeId","brandId","userdatumIdOpp","oppUserId","oppUsername","oppRating","oppBrand","brandName") ' +
                    'VALUES (Now(),$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)',
                    [dated, timeLap+1, timeLap*(timeLap+1), champ[i].id, champ[i].userId, champ[i].userdatumId, champ[i].username, champ[i].rating, champ[i].typeId, champ[i].brandId, champOpp[i].userdatumId, champOpp[i].userId, champOpp[i].username, champOpp[i].rating, champOpp[i].brandId, champOpp[i].name])
                console.log("------------1111111111111------------")
            }
            if (lastUser.length > 0) {
                for (var i = 0; i < lastUser.length; i++) {
                    await db.query('INSERT INTO"' + dated + '"("dateGame","champ","lap","lapPoint","devicesId","userId","userdatumId","username","rating","typeId","brandId","userdatumIdOpp","oppUserId","oppUsername","oppRating","oppBrand","brandName","oppCheck") ' +
                        'VALUES (Now(),$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,\'true\')',
                        [dated, timeLap+1, timeLap*(timeLap+1), lastUser[i].id, lastUser[i].userId, lastUser[i].userdatumId, lastUser[i].username, lastUser[i].rating, lastUser[i].typeId, lastUser[i].brandId, lastUser[i].userdatumId, lastUser[i].userId, lastUser[i].username, lastUser[i].rating, lastUser[i].brandId, lastUser[i].name])
                    console.log("------------222222222222222------------")
                }
            }

            return res.json(dated)
        }catch (e){
            return next(ApiError.internal('Не сработало, ' + e))
        }
    }
}

module.exports = new champLap()
