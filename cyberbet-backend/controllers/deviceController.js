const uuid = require('uuid')
const path = require('path');
const {Device, User, Userdata, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError');
const db = require('../dbPool')
const typeDateStart = require('../startChamp/TypeDateStart')
const moment = require('moment', 'moment-precise-range-plugin');
require('moment-precise-range-plugin');
const jwt = require('jsonwebtoken')
const authMiddleware = require('../middleware/authMiddleware')
const sharp = require('sharp');
const fs = require('fs');

class DeviceController {
    async create(req, res, next) {
        try {
            let {brandId, typeId, info, userId, userdatumId, grandprix} = req.body
            var regBrandId
            if(grandprix === 'false'){
                regBrandId = await Device.findOne({
                    where: {
                        brandId : brandId,
                        userId : userId,
                        typeId : typeId
                    }
                })
            }else if(grandprix === 'true'){
                regBrandId = await Device.findOne({
                    where: {
                        userId : userId,
                        typeId : typeId
                    }
                })
            }
            if (regBrandId) {
                return next(ApiError.badRequest('Вы уже зарегестрированы'))
            }
            function pass_gen() {
                //const chrs = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
                const chrs = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
                var str = '';
                for (var i = 0; i < 7; i++) {
                    var pos = Math.floor(Math.random() * chrs.length);
                    str += chrs.substring(pos, pos+1);
                }
                return str;
            }
            const billId = pass_gen() + "-" + pass_gen() + "-" + pass_gen()
            const dev_username = await db.query('SELECT * FROM userdata WHERE id = $1', [userdatumId])
            const dev_typename = await db.query('SELECT * FROM types WHERE id = $1', [typeId])
            var deviceMassive = []
            if(grandprix === "false"){
                const dev_brandname = await db.query('SELECT * FROM brands WHERE id = $1', [brandId])
                const device = await Device.create({brandId, typeId, userId, userdatumId, dev_username:dev_username.rows[0].username, dev_typename:dev_typename.rows[0].nametype, dev_amount:dev_typename.rows[0].amount, dev_brandname:dev_brandname.rows[0].name, dev_start:false, dev_billid:billId});
                if (info) {
                    info = JSON.parse(info)
                    info.forEach(i =>
                        DeviceInfo.create({
                            title: i.title,
                            description: i.description,
                            deviceId: device.id
                        })
                    )
                }
                return res.json(device)
            }else if(grandprix === "true"){
                const brands = await db.query('SELECT * FROM brands WHERE idname = $1', [typeId])
                for(var a = 0; a < brands.rows.length; a++){
                    const device = await Device.create({brandId:brands.rows[a].id, typeId, userId, userdatumId, dev_username:dev_username.rows[0].username, dev_typename:dev_typename.rows[0].nametype, dev_amount:dev_typename.rows[0].amount, dev_brandname: brands.rows[a].name, dev_start:false, dev_billid:billId});
                    deviceMassive.push(device)

                }
                return res.json(deviceMassive)
            }
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async payGameDeviceAll(req, res, next) {
        try{
            const typeid = req.params.typeid
            //const deviceGame = await db.query('SELECT sum(dev_amount) FROM devices WHERE "typeId" = $1 AND dev_start = false ORDER BY sum(dev_amount)', [typeid])
            //const deviceGame = await db.query('SELECT DISTINCT dev_username FROM devices WHERE "typeId" = $1 AND dev_start = false', [typeid])

            const dev_typename = await db.query('SELECT * FROM types WHERE id = $1', [typeid])
            var deviceGameName = []
            if(dev_typename.rows[0].grandprix === true){
                deviceGameName = await db.query('SELECT DISTINCT dev_username FROM devices WHERE "typeId" = $1 AND dev_start = false', [typeid])
            }else{
                deviceGameName = await db.query('SELECT dev_username FROM devices WHERE "typeId" = $1 AND dev_start = false', [typeid])
            }
            const deviceGameNameBrand = await db.query('SELECT * FROM devices WHERE "typeId" = $1 AND dev_start = false', [typeid])


            return res.json({deviceGameName, deviceGameNameBrand})
        }catch (e){
            return next(ApiError.internal('error payGameDevice'))
        }
    }

    async imgPhotoGet(req, res, next) {
        try{
            const id = req.params.id
            const image = await db.query('SELECT * FROM userdata WHERE id = $1', [id])
            return res.json(image.rows[0].img)

        }catch (e){
            return next(ApiError.internal('Неправильный формат'))
        }
    }

    async createImg(req, res, next) {
        try{
            const {userdataId} = req.body
            const fileImgDelete = await db.query('SELECT img FROM userdata WHERE id = $1', [userdataId])
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static/template/', fileName))
            await sharp(path.join(__dirname, '..', 'static/template/', fileName))
                .resize(300)
                .toFile( path.join(__dirname, '..', 'static/photo/' + fileName ))
            fs.unlinkSync(path.join(__dirname, '..', 'static/template/' + fileName ));

            if (fs.existsSync(path.join(__dirname, '..', 'static/photo/' + fileImgDelete.rows[0].img))) {
                fs.unlinkSync(path.join(__dirname, '..', 'static/photo/' + fileImgDelete.rows[0].img ));
            }
            await db.query('UPDATE userdata SET img = $1 WHERE id = $2', [fileName, userdataId])
            const image = await db.query('SELECT * FROM userdata WHERE id = $1', [userdataId])
            return res.json(image.rows[0].img)

        }catch (e){
            return next(ApiError.internal(e, ' Неправильный формат'))
        }
    }

    async getAll(req, res, next) {
        try{
            let {brandId, typeId, limit, page} = req.query
            page = page || 1
            limit = limit || 12
            let offset = page * limit - limit
            var devices;
            const typeData = await db.query('SELECT * FROM types WHERE id = $1', [typeId])
            var baseCreatedWin = false
            if(typeData.rows[0].start === null){
                baseCreatedWin = true
            }
            var tableName = false
            if(typeData.rows[0].start !== false){
                tableName = true
            }
            if (!brandId && !typeId) {
                if (tableName === true){
                    devices = await db.query('SELECT * , "' + typeData.rows[0].nametype + '".id AS vsid FROM"' + typeData.rows[0].nametype + '"JOIN brands on "brandId" = brands.id ORDER BY lap ASC, "dateMatch" ASC, "brandId" ASC, "userdatumId" ASC')
                }else{
                    devices = await db.query('SELECT * FROM devices JOIN userdata on devices."userdatumId" = userdata.id JOIN types on devices."typeId" = types.id JOIN brands on devices."brandId" = brands.id ORDER BY dev_start DESC, "brandId"')
                }
            }
            if (brandId && !typeId) {
                if (tableName === true){
                    devices = await db.query('SELECT * , "' + typeData.rows[0].nametype + '".id AS vsid FROM"' + typeData.rows[0].nametype  + '"JOIN brands on "brandId" = brands.id WHERE "brandId"=$1 ORDER BY lap ASC, "dateMatch" ASC, "brandId" ASC, "userdatumId" ASC', [brandId])
                }else {
                    devices = await db.query('SELECT * FROM devices JOIN userdata on devices."userdatumId" = userdata.id JOIN types on devices."typeId" = types.id JOIN brands on devices."brandId" = brands.id WHERE devices."brandId" = $1 AND brands.idname = $2 ORDER BY dev_start DESC, "brandId"', [brandId, typeId])
                }
            }
            if (!brandId && typeId) {
                if (tableName === true){
                    devices = await db.query('SELECT * , "' + typeData.rows[0].nametype + '".id AS vsid FROM"' + typeData.rows[0].nametype + '"JOIN brands on "brandId" = brands.id WHERE "typeId"= $1 ORDER BY lap ASC, "dateMatch" ASC, "brandId" ASC, "userdatumId" ASC', [typeId])
                }else{
                    devices = await db.query('SELECT * FROM devices JOIN userdata on devices."userdatumId" = userdata.id JOIN types on devices."typeId" = types.id JOIN brands on devices."brandId" = brands.id WHERE devices."typeId" = $1 AND brands.idname = $1 ORDER BY dev_start DESC, "brandId"', [typeId])
                }
            }
            if (brandId && typeId) {
                if (tableName === true){
                    devices = await db.query('SELECT * , "' + typeData.rows[0].nametype + '".id AS vsid FROM"' + typeData.rows[0].nametype + '"JOIN brands on "brandId" = brands.id WHERE "brandId"= $1 AND "typeId"= $2 ORDER BY lap ASC, "dateMatch" ASC, "brandId" ASC, "userdatumId" ASC', [brandId, typeId])
                }else{
                    devices = await db.query('SELECT * FROM devices JOIN userdata on devices."userdatumId" = userdata.id JOIN types on devices."typeId" = types.id JOIN brands on devices."brandId" = brands.id WHERE devices."brandId" = $1 AND devices."typeId" = $2 AND brands.idname = $2 ORDER BY dev_start DESC, "brandId"', [brandId, typeId])
                }
            }
            return res.json(
                {devices, tableName, baseCreatedWin}
            )
        }catch (e){
                return next(ApiError.internal("ошибка "+e.message))
        }
    }

    // async socDataUser(req, res, next) {
    //     try{
    //         const soc = await db.query('SELECT * FROM userdata WHERE id = $1', [id])
    //         return res.json({soc})
    //
    //     }catch (e){
    //         return next(ApiError.internal('Неправильный формат'))
    //     }
    // }


    async indexSelectTypeNow(req, res, next){
        try{
            const idTypeStart = await typeDateStart.indexSelectTypeNow()
            if(idTypeStart === -1){
                return res.json(0)
            }else{
                return await res.json(idTypeStart)
            }
        }catch (e){
            return next(ApiError.internal(e.message))
        }
    }

    async setDataTimeGame(req, res, next){
        try{
            const {typeId, brandId, id, valueDataTime, lap} = req.body
            const types = await db.query('SELECT * FROM types WHERE id = $1', [typeId])
            if(valueDataTime === ''){
                await db.query('UPDATE"' + types.rows[0].nametype + '"SET "dateMatch" = $1 WHERE ("userId" = $2 or "oppUserId" = $2) AND "brandId" = $3 AND "typeId" = $4 AND lap = $5', [null, id, brandId, typeId, lap])
                return res.json(new Date())
            }
            const date = new Date(valueDataTime);
            if(date < new Date()){
                return next(ApiError.internal('Укажите будущую дату'))
            }

            if(date > new Date(Date.now() + 30*24*60*60*1000)){
                return next(ApiError.internal('Укажите ближайшую дату игры'))
            }
            await db.query('UPDATE"' + types.rows[0].nametype + '"SET "dateMatch" = $1 WHERE ("userId" = $2 or "oppUserId" = $2) AND "brandId" = $3 AND "typeId" = $4 AND lap = $5', [valueDataTime, id, brandId, typeId, lap])
            return res.json(new Date())
        }catch (e){
            return next(ApiError.internal('Неправильный формат даты'))
        }
    }

    async setDataRating(req, res, next){
        try{
            const {userdataId, ratingValue} = req.body
            if (ratingValue < 2001) {
                await db.query('UPDATE userdata SET rating = $1 WHERE id = $2', [ratingValue, userdataId])
                const rating = await db.query('SELECT rating FROM userdata WHERE id = $1', [userdataId])
                return res.json(rating.rows[0].rating)
            }else{
                return next(ApiError.internal('Введите правильное значение'))
            }
        }catch (e){
            return next(ApiError.internal('Неправильный формат'))
        }
    }
    async setDataTwitch(req, res, next){
        try{
            const {userdataId, TwitchValue} = req.body
            if (TwitchValue.slice(0, 21) !== 'https://www.twitch.tv'
                && TwitchValue.slice(0, 20) !== 'http://www.twitch.tv'
                && TwitchValue.slice(0, 17) !== 'https://twitch.tv'
                && TwitchValue.slice(0, 16) !== 'http://twitch.tv'
                && TwitchValue.slice(0, 16) !== ''
            ) {
                return next(ApiError.badRequest('Введите правильный формат twitch'))
            }

            await db.query('UPDATE userdata SET twitch = $1 WHERE id = $2', [TwitchValue, userdataId])
            const twitch = await db.query('SELECT twitch FROM userdata WHERE id = $1', [userdataId])
            return res.json(twitch.rows[0].twitch)
        }catch (e){
            return next(ApiError.internal('Неправильный формат'))
        }
    }
    async setDataYoutube(req, res, next){
        try{
            const {userdataId, YoutubeValue} = req.body
            if (YoutubeValue.slice(0, 8) !== 'https://' && YoutubeValue.slice(0, 7) !== 'http://' && YoutubeValue !== ''
            ) {
                return next(ApiError.badRequest('Введите правильный формат youtube'))
            }
            await db.query('UPDATE userdata SET youtube = $1 WHERE id = $2', [YoutubeValue, userdataId])
            const youtube = await db.query('SELECT youtube FROM userdata WHERE id = $1', [userdataId])
            return res.json(youtube.rows[0].youtube)
        }catch (e){
            return next(ApiError.internal('Неправильный формат'))
        }
    }
    async setDataFacebook(req, res, next){
        try{
            const {userdataId, FacebookValue} = req.body
            if (FacebookValue.slice(0, 8) !== 'https://' && FacebookValue.slice(0, 7) !== 'http://' && FacebookValue !== ''
            ) {
                return next(ApiError.badRequest('Введите правильный формат facebook'))
            }
            await db.query('UPDATE userdata SET facebook = $1 WHERE id = $2', [FacebookValue, userdataId])
            const facebook= await db.query('SELECT facebook FROM userdata WHERE id = $1', [userdataId])
            return res.json(facebook.rows[0].facebook)
        }catch (e){
            return next(ApiError.internal('Неправильный формат'))
        }
    }
    async setDataInstagram(req, res, next){
        try{
            const {userdataId, InstagramValue} = req.body
            if (InstagramValue.slice(0, 8) !== 'https://' && InstagramValue.slice(0, 7) !== 'http://' && InstagramValue !== ''
            ) {
                return next(ApiError.badRequest('Введите правильный формат instagram'))
            }
                await db.query('UPDATE userdata SET instagram = $1 WHERE id = $2', [InstagramValue, userdataId])
                const instagram = await db.query('SELECT instagram FROM userdata WHERE id = $1', [userdataId])
                return res.json(instagram.rows[0].instagram)
        }catch (e){
            return next(ApiError.internal('Неправильный формат'))
        }
    }
    async setDataTelegram(req, res, next){
        try{
            const {userdataId, TelegramValue} = req.body
            if (TelegramValue.slice(0, 13) !== 'https://t.me/' && TelegramValue.slice(0, 12) !== 'http://t.me/' && TelegramValue !== ''
            ) {
                return next(ApiError.badRequest('Введите правильный формат telegram'))
            }
                await db.query('UPDATE userdata SET telegram = $1 WHERE id = $2', [TelegramValue, userdataId])
                const telegram = await db.query('SELECT telegram FROM userdata WHERE id = $1', [userdataId])
                return res.json(telegram.rows[0].telegram)
        }catch (e){
            return next(ApiError.internal('Неправильный формат'))
        }
    }
    async setDataVK(req, res, next){
        try{
            const {userdataId, VKValue} = req.body
            if (VKValue.slice(0, 8) !== 'https://' && VKValue.slice(0, 7) !== 'http://' && VKValue !== ''
            ) {
                return next(ApiError.badRequest('Введите правильный формат vk'))
            }
                await db.query('UPDATE userdata SET vk = $1 WHERE id = $2', [VKValue, userdataId])
                const vk = await db.query('SELECT vk FROM userdata WHERE id = $1', [userdataId])
                return res.json(vk.rows[0].vk)
        }catch (e){
            return next(ApiError.internal('Неправильный формат'))
        }
    }
    async setDataOK(req, res, next){
        try{
            const {userdataId, OKValue} = req.body
            if (OKValue.slice(0, 8) !== 'https://' && OKValue.slice(0, 7) !== 'http://' && OKValue !== ''
            ) {
                return next(ApiError.badRequest('Введите правильный формат ok'))
            }
                await db.query('UPDATE userdata SET ok = $1 WHERE id = $2', [OKValue, userdataId])
                const ok = await db.query('SELECT ok FROM userdata WHERE id = $1', [userdataId])
                return res.json(ok.rows[0].ok)
        }catch (e){
            return next(ApiError.internal('Неправильный формат'))
        }
    }

    async getOne(req, res, next) {
        try{
            const id = req.params.id
            const deviceUserData = await db.query('SELECT * FROM userdata WHERE userdata.id = $1', [id])
            const types = await db.query('SELECT * FROM types WHERE types.start IS NULL')
            const userWin = []
            const userWinOpp = []
            for(let i = 0; i < types.rows.length; i++){
                userWin.push(await db.query('SELECT * FROM"'+types.rows[i].nametype+"_win"+'"WHERE "userdataId" = $1', [id]))
                userWinOpp.push(await db.query('SELECT * FROM"'+types.rows[i].nametype+'"WHERE ("userdatumId" = $1 OR "userdatumIdOpp" = $1) AND "userdatumId" != "userdatumIdOpp"', [id]))
            }
            var countWin = 0
            var countLoss = 0
            for(var i = 0; i < userWinOpp.length; i++){
                for(let a = 0; a < userWinOpp[i].rows.length; a++){
                    if(userWinOpp[i].rows[a].userCheck === false && deviceUserData.rows[0].username === userWinOpp[i].rows[a].username) {countWin += 1}
                    if(userWinOpp[i].rows[a].oppCheck === false && deviceUserData.rows[0].username === userWinOpp[i].rows[a].oppUsername) {countWin += 1}
                    if(userWinOpp[i].rows[a].userCheck === true && deviceUserData.rows[0].username === userWinOpp[i].rows[a].username) {countLoss += 1}
                    if(userWinOpp[i].rows[a].oppCheck === true && deviceUserData.rows[0].username === userWinOpp[i].rows[a].oppUsername) {countLoss += 1}
                }
            }
            const ratingCyberbet = await db.query('SELECT SUM(rating_rate) FROM ratings WHERE rating_username = $1 GROUP BY rating_username', [deviceUserData.rows[0].username])
            var rating = 0
            if (ratingCyberbet.rows.length > 0) {
                rating = ratingCyberbet.rows[0].sum
            }
            const ratingCyberbetMap = await db.query('SELECT SUM(rating_rate) FROM rating_maps WHERE rating_username = $1 GROUP BY rating_username', [deviceUserData.rows[0].username])
            var ratingcymap = 0
            if (ratingCyberbetMap.rows.length > 0) {
                ratingcymap = ratingCyberbetMap.rows[0].sum
            }
            const donatesCyberbet = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND username = $1 AND code_transaction = 2 GROUP BY username ORDER BY sum(amount) DESC', [deviceUserData.rows[0].username])
            var dCyberbet = 0
            if(donatesCyberbet.rows.length > 0){
                dCyberbet = donatesCyberbet.rows[0].sum
            }
            const donatesTypes  = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND username = $1 AND code_transaction = 1 GROUP BY username ORDER BY sum(amount) DESC', [deviceUserData.rows[0].username])
            var dTypes = 0
            if(donatesTypes.rows.length > 0){
                dTypes = donatesTypes.rows[0].sum
            }
            const donatesUsers  = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND username = $1 AND code_transaction = 3 GROUP BY username ORDER BY sum(amount) DESC', [deviceUserData.rows[0].username])
            var dUsers = 0
            if(donatesUsers.rows.length > 0){
                dUsers = donatesUsers.rows[0].sum
            }
            const paymentGame  = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND username = $1 AND code_transaction = 4 GROUP BY username ORDER BY sum(amount) DESC', [deviceUserData.rows[0].username])
            var pGame = 0
            if(paymentGame.rows.length > 0){
                pGame = paymentGame.rows[0].sum
            }
            const fundGame  = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND username = $1 AND code_transaction = 5 GROUP BY username ORDER BY sum(amount) DESC', [deviceUserData.rows[0].username])
            var pFund = 0
            if(fundGame.rows.length > 0){
                pFund = fundGame.rows[0].sum
            }
            var userWinBoolChamp = false
            if(userWin.length > 0){
                userWinBoolChamp = true
            }
            return res.json({
                deviceUserData,
                rating,
                ratingcymap,
                userWin,
                userWinOpp,
                countWin,
                countLoss,
                dTypes,
                dCyberbet,
                dUsers,
                pGame,
                pFund,
                userWinBoolChamp})
        }catch (e){
            return next(ApiError.internal(e.message))
        }
    }
}

module.exports = new DeviceController()
