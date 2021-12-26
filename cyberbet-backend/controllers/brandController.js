const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError');
const db = require('../dbPool')

class BrandController {
    async create(req, res, next) {
        try{
            const {name, typeName, brand_description} = req.body
            const types = await db.query('SELECT id FROM types WHERE nametype = $1', [typeName])
            const brand = await Brand.create({name, idname: types.rows[0].id, amount: 0, brand_description})


            // const brand = await db.query('INSERT INTO brands ("name", "idname", "brand_description", "createdAt", "updatedAt")' +
            //     'VALUES ($1,$2,$3,Now(),Now())', [name, types.rows[0].id, brand_description])


            return res.json(brand)

            //await db.query('INSERT INTO brands (name) VALUES ($1, DATE)', [name])
        }catch (e){
            return next(ApiError.internal('Неправильный формат'))
        }
    }

    // async create(req, res, next) {
    //     try{
    //         const {brandId, name} = req.body
    //         var bool = false
    //         const brandsTableAll = await db.query('SELECT * FROM brands')
    //         for(let i = 0; brandsTableAll.rows.length > i; i++){
    //             if(Number(brandId) === brandsTableAll.rows[i].idname){
    //                 bool = true
    //             }
    //         }
    //         if(bool === true){
    //             const brandsTable = await db.query('SELECT * FROM brands WHERE idname = $1', [brandId])
    //             const brands = brandsTable.rows[0].name
    //             const brandsAll = brands + ";" + name
    //             await db.query('UPDATE brands SET name = $1 WHERE idname = $2', [brandsAll, brandId])
    //             const brandsBase = await db.query('SELECT * FROM brands WHERE idname = $1', [brandId])
    //             return res.json(brandsBase.rows[0].name)
    //         }else{
    //             //await db.query('INSERT INTO brands (name) VALUES ($1, DATE)', [name])
    //             const brand = await Brand.create({name, idname: brandId})
    //             return res.json(brand)
    //         }
    //
    //     }catch (e){
    //         return next(ApiError.internal('Неправильный формат'))
    //     }
    // }

    // async getAll(req, res, next) {
    //     try{
    //         const brands = await Brand.findAll()
    //         return res.json(brands)
    //     }catch (e){
    //         return next(ApiError.internal(e.message))
    //     }
    // }

    async getAll(req, res, next) {
        try{
            const brandsAll = await db.query('SELECT * FROM brands')
            return res.json(brandsAll.rows)
        }catch (e){
            return next(ApiError.internal(e.message))
        }
    }


    async getBrandAll(req, res, next) {
        try{
            const brandsAll = await db.query('SELECT * FROM brands')
            return res.json(brandsAll)
        }catch (e){
            return next(ApiError.internal(e.message))
        }
    }

    // async getOne(req, res, next) {
    //     try{
    //         const id = req.params.id
    //         const brands = await db.query('SELECT * FROM brands WHERE id = $1', [id])
    //         return res.json(types.rows)
    //     }catch (e){
    //         return next(ApiError.internal(e.message))
    //     }
    // }

}

module.exports = new BrandController()
