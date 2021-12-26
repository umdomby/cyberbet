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


class VsController {


    async getUsersWin(req, res, next) {
        try{
            let {typeId} = req.query
            if(typeId === undefined){
                return {}
            }
            const types = await db.query('SELECT * FROM types WHERE id = $1', [typeId])

            var massiveTableBase = []
            var tableBase = await db.query('SELECT table_name FROM information_schema.tables WHERE table_schema=\'public\'')
            for (var i = 0; i < tableBase.rows.length; i++) {
                massiveTableBase.push(tableBase.rows[i].table_name)
            }
            var baseCreated = contains(massiveTableBase, types.rows[0].nametype + "_win")

            function contains(arr, elem) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] === elem) {
                        return true;
                    }
                }
                return false;
            }

            const a = 0

            if(baseCreated === true){
                const users_win = await db.query('SELECT * FROM"'+ types.rows[0].nametype + "_win" +'"')
                return res.json({users_win})
            }else{
                // const users_win = {}
                // // return res.json({
                // //     brandsName: "нет",
                // //     user: "нет",
                // //     lap: 0,
                // //     brandId: 0
                // // })
                // return res.json({users_win})
            }

        }catch (e){
            return next(ApiError.internal(e.message))
        }
    }


    async getOneVS(req, res, next) {
        try{
            const type = req.params.type
            const id = req.params.id
            const types = await db.query('SELECT * FROM types WHERE "id" = $1', [type])
            const dataTaleHave = await typeDateStart.dataHaveFullSort(types.rows[0].nametype)
            if(dataTaleHave) {
                const VS = await db.query('SELECT * FROM"'+ types.rows[0].nametype +'"WHERE id = $1', [id])
                const user = await db.query('SELECT * FROM userdata WHERE id = $1', [VS.rows[0].userdatumId])
                const userOpp = await db.query('SELECT * FROM userdata WHERE id = $1', [VS.rows[0].userdatumIdOpp])
                return res.json({
                    VS,
                    user,
                    userOpp
                })
            }else{return res.json('else')}
        }catch (e){
            return next(ApiError.internal(e.message))
        }
    }

    async userCheck(req, res, next){
        try{
            const {id, checked, typeid, brandid, lap} = req.body
            const types = await db.query('SELECT * FROM types WHERE "id" = $1', [typeid])
            // const dataTableHave = await typeDateStart.dataHaveFullSort(types.rows[0].nametype)
            // if(dataTableHave) {
                await db.query('UPDATE"' + types.rows[0].nametype + '"SET "userCheck" = $1 WHERE "userId" = $2 AND "brandId" = $3 AND lap = $4', [checked, id, brandid, lap])
                const userCheck = await db.query('SELECT * FROM"' + types.rows[0].nametype + '"WHERE "userId" = $1 AND "brandId" = $2', [id, brandid])
                return res.json(userCheck.rows[0].userCheck)
            // }else{return res.json(null)}
        }catch (e){
            return next(ApiError.internal(e.message))
        }
    }

    async oppCheck(req, res, next){
        try{
            const {id, checked, typeid, brandid, lap} = req.body
            const types = await db.query('SELECT * FROM types WHERE id = $1', [typeid])
            // const dataTaleHave = await typeDateStart.dataHaveFullSort(types.rows[0].nametype)
            // if(dataTaleHave) {
                await db.query('UPDATE"'+ types.rows[0].nametype +'"SET "oppCheck" = $1 WHERE "oppUserId" = $2 AND "brandId" = $3 AND lap = $4', [checked, id, brandid, lap])
                const oppCheck = await db.query('SELECT "oppCheck" FROM"'+ types.rows[0].nametype +'"WHERE "oppUserId" = $1 AND "brandId" = $2', [id, brandid])
                return res.json(oppCheck.rows[0].oppCheck)
            // }else{return res.json(null)}
        }catch (e){
            return next(ApiError.internal(e.message))
        }
    }

    async checkUserTwitch(req, res, next){
        try{
            const {id, checked, typeid, brandid, lap} = req.body
            const types = await db.query('SELECT * FROM types WHERE "id" = $1', [typeid])
            const dataTableHave = await typeDateStart.dataHaveFullSort(types.rows[0].nametype)
            // if(dataTableHave) {
                await db.query('UPDATE"' + types.rows[0].nametype + '"SET "userTwitch" = $1 WHERE "userId" = $2 AND "brandId" = $3 AND lap = $4', [checked, id, brandid, lap])
                const userTwitch = await db.query('SELECT id, "userTwitch", "typeId", "brandId", lap FROM"' + types.rows[0].nametype + '"WHERE "userId" = $1 AND "brandId" = $2', [id, brandid])
            const a = userTwitch.rows[0]
            return res.json(userTwitch.rows[0].userTwitch)
            // }else{return res.json(null)}
        }catch (e){
            return next(ApiError.internal(e.message))
        }
    }
    async checkOppTwitch(req, res, next){
        try{
            const {id, checked, typeid, brandid, lap} = req.body
            const types = await db.query('SELECT * FROM types WHERE id = $1', [typeid])
            // const dataTaleHave = await typeDateStart.dataHaveFullSort(types.rows[0].nametype)
            // if(dataTaleHave) {
                await db.query('UPDATE"'+ types.rows[0].nametype +'"SET "oppTwitch" = $1 WHERE "oppUserId" = $2 AND "brandId" = $3 AND lap = $4', [checked, id, brandid, lap])
                const oppTwitch = await db.query('SELECT id, "oppTwitch", "typeId", "brandId", lap FROM"'+ types.rows[0].nametype +'"WHERE "oppUserId" = $1 AND "brandId" = $2', [id, brandid])
                const a = oppTwitch.rows[0]
            return res.json(oppTwitch.rows[0])
            // }else{return res.json(null)}
        }catch (e){
            return next(ApiError.internal(e.message))
        }
    }


    async createImgVsUser(req, res, next) {
        try{
            const {idvs, typeId, userOpp} = req.body

            try {
                fs.mkdirSync(path.join(__dirname, '..', 'static/' + typeId), { recursive: true })
            } catch (err) {
                if (err.code !== 'EEXIST') throw err
            }
            const data = await db.query('SELECT nametype FROM types WHERE id = $1', [typeId])
            const nameDatabase = data.rows[0].nametype
            const fileImgDelete = await db.query('SELECT"'+userOpp+'"FROM"'+nameDatabase+'"WHERE id = $1', [idvs])
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static/template/', fileName))
            await sharp(path.join(__dirname, '..', 'static/template/', fileName))
                .resize(1920, 1080)
                .toFile( path.join(__dirname, "../static/" + typeId + "/" + fileName ))
            fs.unlinkSync(path.join(__dirname, "../static/template/" + fileName ))
            if(userOpp === 'imgfu' || userOpp === 'imgfuart' || userOpp === 'imgfucart') {
                if (fs.existsSync(path.join(__dirname, "../static/" + typeId + "/" + fileImgDelete.rows[0].imgfu))) {
                    fs.unlinkSync(path.join(__dirname, "../static/" + typeId + "/" + fileImgDelete.rows[0].imgfu));
                }
                if (fs.existsSync(path.join(__dirname, "../static/" + typeId + "/" + fileImgDelete.rows[0].imgfuart))) {
                    fs.unlinkSync(path.join(__dirname, "../static/" + typeId + "/" + fileImgDelete.rows[0].imgfuart));
                }
                if (fs.existsSync(path.join(__dirname, "../static/" + typeId + "/" + fileImgDelete.rows[0].imgfucart))) {
                    fs.unlinkSync(path.join(__dirname, "../static/" + typeId + "/" + fileImgDelete.rows[0].imgfucart));
                }
            }
            if(userOpp === 'imgfo' || userOpp === 'imgfoart' || userOpp === 'imgfocart') {
                if (fs.existsSync(path.join(__dirname, "../static/" + typeId + "/" + fileImgDelete.rows[0].imgfo))) {
                    fs.unlinkSync(path.join(__dirname, "../static/" + typeId + "/" + fileImgDelete.rows[0].imgfo));
                }
                if (fs.existsSync(path.join(__dirname, "../static/" + typeId + "/" + fileImgDelete.rows[0].imgfoart))) {
                    fs.unlinkSync(path.join(__dirname, "../static/" + typeId + "/" + fileImgDelete.rows[0].imgfoart));
                }
                if (fs.existsSync(path.join(__dirname, "../static/" + typeId + "/" + fileImgDelete.rows[0].imgfocart))) {
                    fs.unlinkSync(path.join(__dirname, "../static/" + typeId + "/" + fileImgDelete.rows[0].imgfocart));
                }
            }
            await db.query('UPDATE"' + nameDatabase + '"SET "'+userOpp+'" = $1 WHERE id = $2', [fileName, idvs])
                //const image = await db.query('SELECT * FROM"'+ nameDatabase +'"WHERE id = $1', [idvs])
            return res.json(fileName)

        }catch (e){
            return next(ApiError.internal(e+" vsController-createImgVS"))
        }
    }


    async linkVs(req, res, next) {
        try{
            const {idvs, typeId, userOpp, linkVs} = req.body
            const data = await db.query('SELECT nametype FROM types WHERE id = $1', [typeId])
            const nameDatabase = data.rows[0].nametype
            if(userOpp === 'linku') {
                await db.query('UPDATE"' + nameDatabase + '"SET linku = $1 WHERE id = $2', [linkVs, idvs])
                const link = await db.query('SELECT * FROM"'+ nameDatabase +'"WHERE id = $1', [idvs])
                return res.json(link.rows[0].linku)
            }
            if(userOpp === 'linko') {
                await db.query('UPDATE"' + nameDatabase + '"SET linko = $1 WHERE id = $2', [linkVs, idvs])
                const link = await db.query('SELECT * FROM"'+ nameDatabase +'"WHERE id = $1', [idvs])
                return res.json(link.rows[0].linko)
            }
        }catch (e){
            return next(ApiError.internal(e+" vsController-createImgVS"))
        }

    }

}

module.exports = new VsController()
