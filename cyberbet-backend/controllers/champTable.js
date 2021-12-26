const ApiError = require('../error/ApiError');
const db = require('../dbPool')
const sequelize = require('../db')
const { DataTypes } = require('sequelize');
const queryInterface = sequelize.getQueryInterface();

class champTable {

    async createTableRandom(req, res, next) {
        //const {nametype, datedNew} = req.body
        const {nametype} = req.body

        try {
            await queryInterface.createTable(nametype, {
                id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
                champ: {type: DataTypes.STRING, unique: false, allowNull: true},
                brandName: {type: DataTypes.STRING, unique: false, allowNull: true},
                username: {type: DataTypes.STRING, unique: false, allowNull: true },
                oppUsername: {type: DataTypes.STRING, unique: false, allowNull: true },
                dateGame: {type: DataTypes.DATE, unique: false, allowNull: true},
                lap: {type: DataTypes.INTEGER, unique: false, allowNull: true},
                lapPoint: {type: DataTypes.INTEGER, unique: false, allowNull: true},
                // userPoint: {type: DataTypes.INTEGER, defaultValue: 1},
                oppPoint: {type: DataTypes.INTEGER, defaultValue: 1},
                devicesId: {type: DataTypes.INTEGER, unique: false, allowNull: true },
                userId: {type: DataTypes.INTEGER, unique: false, allowNull: true },
                userdatumId: {type: DataTypes.INTEGER, unique: false, allowNull: true },
                rating: {type: DataTypes.INTEGER, unique: false, allowNull: true },
                typeId: {type: DataTypes.INTEGER, unique: false, allowNull: true },
                brandId: {type: DataTypes.INTEGER, unique: false, allowNull: true },
                userdatumIdOpp: {type: DataTypes.INTEGER, unique: false, allowNull: true },
                oppUserId: {type: DataTypes.INTEGER, unique: false, allowNull: true },
                oppRating: {type: DataTypes.INTEGER, unique: false, allowNull: true },
                oppBrand: {type: DataTypes.INTEGER, unique: false, allowNull: true },
                userCheck: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
                oppCheck: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
                userTwitch: {type: DataTypes.BOOLEAN, unique: false, defaultValue: true },
                oppTwitch: {type: DataTypes.BOOLEAN, unique: false, defaultValue: true },
                dateMatch: {type: DataTypes.DATE, unique: false, allowNull: true },
                tvUser: {type: DataTypes.STRING, unique: false, allowNull: true },
                tvOpp: {type: DataTypes.STRING, unique: false, allowNull: true },

                linku: {type: DataTypes.STRING, allowNull: true},
                linko: {type: DataTypes.STRING, allowNull: true},

                // imgfu: {type: DataTypes.STRING, allowNull: true},
                // imgfo: {type: DataTypes.STRING, allowNull: true},

                // imgfuart: {type: DataTypes.STRING, allowNull: true},
                // imgfoart: {type: DataTypes.STRING, allowNull: true},
                // linkuart: {type: DataTypes.STRING, allowNull: true},
                // linkoart: {type: DataTypes.STRING, allowNull: true},
                //
                // imgfucart: {type: DataTypes.STRING, allowNull: true},
                // imgfocart: {type: DataTypes.STRING, allowNull: true},
                // linkucart: {type: DataTypes.STRING, allowNull: true},
                // linkocart: {type: DataTypes.STRING, allowNull: true},
            });

            //Table to massive brandChamp
            var champ = []
            var champOpp = []
            const typesIdChamp = await db.query('SELECT * FROM types WHERE nametype = $1', [nametype]) //idType
            const databaseTypeStart = []
            //const sumBrand = await db.query('SELECT * FROM brands')
            const sumBrand = await db.query('SELECT * FROM brands WHERE brands.idname = $1', [typesIdChamp.rows[0].id])
            var champVarHalf = []
            var champOppHalf = []
            var lastUser=[]
            for (var i = 1; i < sumBrand.rows.length + 1; i++) {
                //JOIN brands ON devices."brandId"= brands.id
                databaseTypeStart[i] = await db.query('SELECT * , devices.id AS id FROM devices INNER JOIN userdata ON devices."userId"=userdata."userId" JOIN brands ON devices."brandId"= brands.id WHERE devices."typeId" = $1 AND devices."brandId" = $2' , [typesIdChamp.rows[0].id, sumBrand.rows[i-1].id]) //data

                var champVar = []
                for (var j = 0; j < databaseTypeStart[i].rows.length; j++) {
                    if(databaseTypeStart[i].rows[j].dev_start === true) {
                        champVar.push(databaseTypeStart[i].rows[j])
                    }
                }
                shuffleArray(champVar)

                if(champVar.length % 2 !== 0 ){
                    lastUser.push(champVar.pop())
                }
                champVarHalf = champVar.slice(0, champVar.length/2)
                champOppHalf = champVar.slice(champVar.length/2)

                for (var k = 0; k < champVarHalf.length; k++) {
                    champ.push(champVarHalf[k])
                    champOpp.push(champOppHalf[k])
                }
            }

            function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }

            for (var i = 0; i < champ.length; i++) {
                await db.query('INSERT INTO"' + nametype + '"("dateGame","champ","lap","lapPoint","devicesId","userId","userdatumId","username","rating","typeId","brandId","userdatumIdOpp","oppUserId","oppUsername","oppRating","oppBrand","brandName", "tvUser", "tvOpp") ' +
                    'VALUES (Now(),$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18)',
                    [ nametype, 1, 1, champ[i].id, champ[i].userId, champ[i].userdatumId, champ[i].username, champ[i].rating, champ[i].typeId, champ[i].brandId, champOpp[i].userdatumId, champOpp[i].userId, champOpp[i].username, champOpp[i].rating, champOpp[i].brandId, champOpp[i].name, champ[i].twitch, champOpp[i].twitch])
            }

            if(lastUser.length > 0){
                for (var i = 0; i < lastUser.length; i++) {
                    await db.query('INSERT INTO"' + nametype + '"("dateGame","champ","lap","lapPoint","devicesId","userId","userdatumId","username","rating","typeId","brandId","userdatumIdOpp","oppUserId","oppUsername","oppRating","oppBrand","brandName","tvUser","tvOpp","oppCheck") ' +
                        'VALUES (Now(),$1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,\'true\')',
                        [ nametype, 1, 1, lastUser[i].id, lastUser[i].userId, lastUser[i].userdatumId, lastUser[i].username, lastUser[i].rating, lastUser[i].typeId, lastUser[i].brandId, lastUser[i].userdatumId, lastUser[i].userId, lastUser[i].username, lastUser[i].rating, lastUser[i].brandId, lastUser[i].name, lastUser[i].twitch, lastUser[i].twitch])
                }
            }

            await db.query('UPDATE types SET name = Now() WHERE id = $1', [typesIdChamp.rows[0].id])
            const types = await db.query('SELECT * FROM types WHERE id = $1', [typesIdChamp.rows[0].id])
            //console.log("createChampTable      " + types)
            await db.query('UPDATE types SET start = true WHERE nametype = $1', [nametype])
            return res.json(types)

        }catch (e){
            return next(ApiError.internal('Неправильный формат даты'))
        }
    }
}

module.exports = new champTable();
