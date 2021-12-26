//import moment from "moment";
//import ru from 'moment/locale/ru';
const moment = require('moment', 'moment-precise-range-plugin');

const {Device, User, Userdata, DeviceInfo, Brand, Type} = require('../models/models')
const ApiError = require('../error/ApiError');
const db = require('../dbPool')

const sequelize = require('../db')
const { DataTypes } = require('sequelize');
const queryInterface = sequelize.getQueryInterface();


class champWin {

    async dateChampWin(req, res, next) {
        try {
            const {dated} = req.body

            // const maxLap = await db.query('SELECT MAX(lap) FROM"' + dated + '"')
            // var timeLap = maxLap.rows[0].max

            const  AllDataBase = await db.query('SELECT * FROM"' + dated + '"')
            var AllDataBaseMassive = []
            for (var i = 0; i < AllDataBase.rows.length; i++) {
                AllDataBaseMassive.push(AllDataBase.rows[i])
            }

            // var winMassive = []
            // for (var i = 0; i < AllDataBaseMassive.length; i++) {
            //     if(AllDataBaseMassive[i].userCheck === false || AllDataBaseMassive[i].oppCheck === true) {
            //         winMassive.push(AllDataBaseMassive[i].username)
            //     }
            //     if(AllDataBaseMassive[i].userCheck === true && AllDataBaseMassive[i].oppCheck === false){
            //         winMassive.push(AllDataBaseMassive[i].oppUsername)
            //     }
            // }
            var brantIdMassive = []
            for (var i = 0; i < AllDataBaseMassive.length; i++) {
                    brantIdMassive.push(AllDataBaseMassive[i].brandId)
            }

            // var lapMassive = []
            // for (var i = 0; i < AllDataBaseMassive.length; i++) {
            //     lapMassive.push(AllDataBaseMassive[i].lap)
            // }

            //const winMassiveSort = [...new Set(winMassive)];
            const brandIdMassiveSort = [...new Set(brantIdMassive)]
            // const lapMassiveSort = [...new Set(lapMassive)]
            // const maxLap = Math.max(...lapMassiveSort);

            //const winMaxLapUser = await db.query('SELECT * FROM"' + dated + '"WHERE lap = $1 AND userCheck = false', [maxLap])
            // const winMaxLapOpp = await db.query('SELECT * FROM"' + dated + '"WHERE lap = $1 AND oppCheck = false', [maxLap])

            var selectBrandIdGamer = []
            for(var f = 0; f < brandIdMassiveSort.length; f++) {
                for (var i = 0; i < AllDataBaseMassive.length; i++) {
                    if (brandIdMassiveSort[f] === AllDataBaseMassive[i].brandId && AllDataBaseMassive[i].userCheck === false){
                        selectBrandIdGamer.push({
                            brandId: AllDataBaseMassive[i].brandId,
                            user: AllDataBaseMassive[i].username,
                            userCheck: AllDataBaseMassive[i].userCheck,
                            lap: AllDataBaseMassive[i].lap,
                            userdataId: AllDataBaseMassive[i].userdatumId
                        })
                    }
                    if (brandIdMassiveSort[f] === AllDataBaseMassive[i].brandId && AllDataBaseMassive[i].oppCheck === false){
                        selectBrandIdGamer.push({
                            brandId: AllDataBaseMassive[i].brandId,
                            user: AllDataBaseMassive[i].oppUsername,
                            oppCheck: AllDataBaseMassive[i].oppCheck,
                            lap: AllDataBaseMassive[i].lap,
                            userdataId: AllDataBaseMassive[i].userdatumIdOpp
                        })
                    }
                }
            }
            var selectBrandMaxLap = []
            for(var t = 0; t < brandIdMassiveSort.length; t++) {
                var lapMaxBrandId = 0
                var userFor = ""
                var brandIdFor = 0
                var userdataId = 0
                for (var i = 0; i < selectBrandIdGamer.length; i++) {
                    if(brandIdMassiveSort[t] === selectBrandIdGamer[i].brandId){
                        if(selectBrandIdGamer[i].lap > lapMaxBrandId) {
                            lapMaxBrandId = selectBrandIdGamer[i].lap
                            userFor = selectBrandIdGamer[i].user
                            brandIdFor = selectBrandIdGamer[i].brandId
                            userdataId = selectBrandIdGamer[i].userdataId
                        }
                    }
                }
                selectBrandMaxLap.push({
                    brandId: brandIdFor,
                    user: userFor,
                    lap: lapMaxBrandId,
                    userdataId: userdataId,
                })
            }

            const brandsName = await db.query('SELECT * FROM brands')

            const winGamer = []
            for(let i = 0; i < brandsName.rows.length; i++){
                for(let n = 0; n < selectBrandMaxLap.length; n++){
                    if(brandsName.rows[i].id === selectBrandMaxLap[n].brandId){
                        winGamer.push({
                            brandsName: brandsName.rows[i].name,
                            user: selectBrandMaxLap[n].user,
                            lap: selectBrandMaxLap[n].lap,
                            brandId: selectBrandMaxLap[n].brandId,
                            userdataId: selectBrandMaxLap[n].userdataId
                        })
                    }
                }
            }

            await queryInterface.createTable(dated + "_win", {
                id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
                champ: {type: DataTypes.STRING, unique: false, allowNull: true },
                brandsName: {type: DataTypes.STRING, unique: false, allowNull: true },
                user: {type: DataTypes.STRING, unique: false, allowNull: true },
                lap: {type: DataTypes.INTEGER, unique: false, allowNull: true},
                brandId: {type: DataTypes.INTEGER, unique: false, allowNull: true },
                userdataId: {type: DataTypes.INTEGER, unique: false, allowNull: true },
                date: {type: DataTypes.DATE, unique: false, allowNull: true},
            });


            for (var i = 0; i < winGamer.length; i++) {
                await db.query('INSERT INTO"' + dated + "_win" + '"("brandsName","user","lap","brandId","userdataId", champ, date)' +
                    'VALUES ($1,$2,$3,$4,$5,$6,Now())',
                    [ winGamer[i].brandsName, winGamer[i].user, winGamer[i].lap, winGamer[i].brandId, winGamer[i].userdataId, dated])
            }

            await db.query('UPDATE types SET start = null WHERE nametype = $1', [dated])
            return res.json({winGamer})

            //var winMaxLapOppUser = []


            // function whileF (a, b){
            //     if( a === b){
            //         return false
            //     }else {
            //         return true
            //     }
            // }
            //
            // while (whileF(brandIdMassiveSort.length, winMaxLapOppUser.length)) {
            //
            //     for (var k = 3; k > 1;  k--){
            //
            //         for (var i = maxLap; i < AllDataBaseMassive.length; i++) {
            //             if(brandIdMassiveSort.length === winMaxLapOppUser.length){
            //                 break
            //             }
            //             if (AllDataBaseMassive[i].lap === k) {
            //                 if (AllDataBaseMassive[i].userCheck === false) {
            //                     winMaxLapOppUser.push({
            //                         user: AllDataBaseMassive[i].username,
            //                         brandId: AllDataBaseMassive[i].brandId
            //                     })
            //                 }
            //                 if(brandIdMassiveSort.length === winMaxLapOppUser.length){
            //                     break
            //                 }
            //                 if (AllDataBaseMassive[i].oppCheck === false) {
            //                     winMaxLapOppUser.push({
            //                         user: AllDataBaseMassive[i].oppUsername,
            //                         brandId: AllDataBaseMassive[i].brandId
            //                     })
            //                 }
            //             }
            //
            //         }
            //     }
            // }
            //
            // var timeLap = winMaxLapOppUser
            //
            // var tt = 0



            // if(brantIdMassiveSort.length !== winMaxLapOppUser.length){
            //     for(let i = 0; i < maxLap-1; i++ ){
            //
            //
            //         if(brantIdMassiveSort.length === winMaxLapOppUser.length){
            //             return
            //         }
            //     }
            // }



            // const winMassiveFinish = []
            // for(let i = 0; i < brantIdMassive.length; i++){
            //     for(var j = 0; j < AllDataBaseMassive.length; j++){
            //         if(AllDataBaseMassive[j].lap === maxLap){
            //
            //                 // for(var k = 0; k < winMassiveSort.length; k++) {
            //                 //     if(winMassiveSort[k] === ){
            //                 //         winMassiveFinish.push(winMassiveSort[k].name)
            //                 //     }
            //                 // }
            //         }
            //     }
            // }

            // var oppWinMassive = []
            // for (var i = 0; i < AllDataBaseMassive.length; i++) {
            //     if(AllDataBaseMassive[i].oppCheck === false) {
            //         oppWinMassive.push(AllDataBaseMassive[i].oppUsername)
            //     }
            // }


            // var userOneWinMassive = []
            // for (var i = 0; i < userWinMassive.length; i++) {
            //     contains(userWinMassive, userWinMassive[i].username)
            //     function contains(arr, elem) {
            //         for (var i = 0; i < arr.length; i++) {
            //             if (arr[i].username !== elem) {
            //                 userOneWinMassive.push(arr[i].username)
            //                 //return true;
            //             }
            //         }
            //         //return false;
            //     }
            // }


            //const userWin = await db.query('SELECT * FROM"' + dated + '"WHERE "userCheck" = false')
            //const oppWin = await db.query('SELECT * FROM"' + dated + '"WHERE "oppCheck" = false')




            //  async function getBrandIdname(idname) {
            //     try{
            //         const brands = await db.query('SELECT name FROM brands WHERE idname = $1', [idname])
            //         var arrNameBrandBase = [];
            //         for (var i in brands.rows) {
            //             arrNameBrandBase.push(brands.rows[i].name)
            //         }
            //         return arrNameBrandBase
            //     }catch (e) {
            //         console.log(e)
            //     }
            // }
            //
            // const {dated} = req.body
            // const typeIdForName = await db.query('SELECT * FROM types WHERE types.nametype = $1', [dated])
            // const brandNameAndId = await getBrandIdname(typeIdForName.rows[0].id)
            // //const dataBase = await db.query('SELECT * FROM"' + dated + '"')
            // var allBrandBaseUsers = []
            // for(let i = 0; i < brandNameAndId.rows.length; i++){
            //     allBrandBaseUsers.push(await db.query('SELECT MAX(lap) FROM"' + dated + '"WHERE"' + dated.brandId + '" = $1', [brandNameAndId.id] ))
            // }
            //
            // var timeLap = maxLap.rows[0].max



        }catch (e){
            return next(ApiError.internal('Не сработало, ' + e))
        }

    }


}

module.exports = new champWin()
