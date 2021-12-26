const {Type} = require('../models/models')
const ApiError = require('../error/ApiError');
const db = require('../dbPool')
const typeDateStart = require('../startChamp/TypeDateStart')

class TypeController {
    async create(req, res, next) {
        try{
            const {nametype, description, amount, grandprix} = req.body
            const name = new Date()
            const start = false
            const fund = 0
            const type = await Type.create({name, nametype, start, description, fund, amount, grandprix})
            return res.json(type)
        }catch (e){
            return next(ApiError.internal(e))
        }
    }

    // async update(req, res, next) {
    //     try{
    //         const {id, name, nametype} = req.body
    //         await db.query('UPDATE types SET name = $1, nametype = $2 WHERE id = $3', [name, nametype, id])
    //         const types = await db.query('SELECT * FROM types WHERE id = $1', [id])
    //         return res.json(types)
    //     }catch (e){
    //         return next(ApiError.internal('Неправильный формат даты 2:'))
    //     }
    // }

    // async getAll(req, res) {
    //     const types = await Type.findAll()
    //     return res.json(types)
    // }

    async getAll(req, res, next) {
        try{
            const types = await db.query('SELECT * FROM types ORDER BY id')
            return res.json(types.rows)

        }catch (e){
            return next(ApiError.internal(e.message))
        }
    }
    // async getChampStart(req, res, next) {
    //     try{
    //         const massiveTypes = []
    //         const types = await db.query('SELECT * FROM types ORDER BY name')
    //         for(let i = 0; i < types.rows.length; i++) {
    //             if(await typeDateStart.dataHaveFullSort(types.rows[i].nametype) === false){
    //                 massiveTypes.push(types.rows[i])
    //             }
    //         }
    //
    //         return res.json(massiveTypes)
    //
    //     }catch (e){
    //         return next(ApiError.internal(e.message))
    //     }
    // }

    async getBrandIdname(req, res, next) {
        const typeid = req.params.typeid
        try{
            const brands = await db.query('SELECT * FROM brands WHERE idname = $1', [typeid])
            return res.json(brands.rows)
        }catch (e){
            return next(ApiError.internal(e.message))
        }
    }


    async getTypeId(req, res, next) {
        try{
            const typeId = await Type.findOne({where: {id: req.params.id}})
            return res.json(typeId)
        }catch (e){
            return next(ApiError.internal(e.message))
        }
    }

    // async getTypeStart(req, res, next) {
    //     try{
    //         return res.json(await typeDateStart.typeDataStartNow())
    //     }catch (e){
    //         return next(ApiError.internal(e.message))
    //     }
    // }

}

module.exports = new TypeController()
