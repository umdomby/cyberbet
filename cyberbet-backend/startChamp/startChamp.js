// //import moment from "moment";
// //import ru from 'moment/locale/ru';
// const moment = require('moment', 'moment-precise-range-plugin');
//
// const {Device, User, Userdata, DeviceInfo, Brand, Type} = require('../models/models')
// const ApiError = require('../error/ApiError');
// const db = require('../dbPool')
//
// const sequelize = require('../db')
// const { DataTypes } = require('sequelize');
// const queryInterface = sequelize.getQueryInterface();
// const typeDateStart = require('./TypeDateStart')
//
//
// class startChamp {
//
//     constructor(msg) {
//         this.message = msg;
//         this.dataStart = true;
//         this.databaseSetLap = true;
//         this.minutesStopLap = 0
//
//         this.message2 ="0"
//     }
//
//     showMessage(){
//         //setInterval(()=> this.dateControl(), 1000)
//     }
//     async dateMinutesStopLap(){
//         typeDateStart.typeDataStartNow().then(dated => this.minutesStopGo(dated))
//     }
//
//     async minutesStopGo(dated){
//         try{
//             let duration = moment.duration(moment().diff(moment(dated)))
//             let minutes = duration.asMinutes();
//             let maxLap = await db.query('SELECT MAX(lap) FROM"' + dated + '"')
//             this.minutesStopLap = maxLap.rows[0].max + Math.floor(minutes) - 1
//             // if(maxLap === 1){ this.minutesStopLap = 0}
//             // else{this.minutesStopLap = maxLap.rows[0].max}
//         }
//         catch (e){console.log("maxLap.rows[0].max " + e.message)}
//         //if(maxLap >= 1){this.minutesStopLap = maxLap.rows[0].max - 1}
//     }
//     async dateControl(){
//         typeDateStart.typeDataStart().then(dated => this.createChampTable(dated))
//         this.databaseSetLap = true
//         //console.log("77777777777777777 " + this.message2)
//         typeDateStart.typeDataStartNow().then(dated => this.dateChampLap(dated))
//     }
//
//     async dateChampLap(dated) {
//         try {
//             const maxLap = await db.query('SELECT MAX(lap) FROM"' + dated + '"')
//             // const gg = maxLap.rows[0].max
//             // console.log(gg)
//
//             if (maxLap.rows[0].max === 1) {
//                 this.minutesStopLap = 0
//             }
//
//             await this.champInsertTableLap(dated, maxLap.rows[0].max, 'minutes')
//
//             //else{ this.minutesStopLap = 0 }
//         }catch (e){
//             console.log("База ещё не создана " + e.message)
//         }
//     }
//
//     async champInsertTableLap(dated, timeLap, timeChoice) {
//         var duration = moment.duration(moment().diff(moment(dated))); //.add(timeLap, timeChoice)
//         var minutes = duration.asMinutes();
//         //minutes += -1192
//         console.log("minutes  " + minutes )
//         console.log("timeLap  " + timeLap )
//         console.log("minutesStopLap  " + this.minutesStopLap )
//         console.log("1   "+ (minutes + timeLap - 2))
//         console.log("2   "+ (this.minutesStopLap))
//         console.log("------------------")
//
//         const a = false
//         const b = true
//         //if(a){
//         if(minutes + timeLap - 2 > this.minutesStopLap){
//             this.minutesStopLap = minutes + timeLap
//             console.log("333333333333333333333333333333333 ")
//             try {
//                 var champ = []
//                 var champOpp = []
//                 const databaseTypeStart = []
//                 const sumBrand = await db.query('SELECT * FROM brands')
//
//                 var champVarHalf = []
//                 var champOppHalf = []
//                 var lastUser = []
//                 for (var i = 1; i < sumBrand.rows.length + 1; i++) {
//                     databaseTypeStart[i] = await db.query('SELECT * FROM"' + dated + '"WHERE lap = $1 AND "brandId" = $2', [timeLap, i])
//                     var champVar = []
//                     var champVarUser = []
//                     var champVarOpp = []
//                     var UO = []
//                     for (let j = 0; j < databaseTypeStart[i].rows.length; j++) {
//                         UO.push(databaseTypeStart[i].rows[j])
//                     }
//                     for (let k = 0; k < UO.length; k++) {
//                         if (UO[k].userCheck === false) {
//                             champVarUser.push(UO[k])
//                         }
//                     }
//                     for (let k = 0; k < UO.length; k++) {
//                         if (UO[k].oppCheck === false) {
//                             champVarOpp.push(UO[k])
//                         }
//                     }
//                     for (let k = 0; k < champVarOpp.length; k++) {
//                         champVarOpp[k].userId = champVarOpp[k].oppUserId
//                         champVarOpp[k].userdatumId = champVarOpp[k].userdatumIdOpp
//                         champVarOpp[k].username = champVarOpp[k].oppUsername
//                         champVarOpp[k].rating = champVarOpp[k].oppRating
//                         champVarOpp[k].brandId = champVarOpp[k].oppBrand
//                     }
//
//                     champVar = [...champVarUser, ...champVarOpp]
//                     shuffleArray(champVar)
//
//                     if (champVar.length % 2 !== 0 && champVar.length > 2 ) {
//                         lastUser.push(champVar.pop())
//                     }
//                     if(champVar.length >= 4){
//                         champVarHalf = champVar.slice(0, champVar.length / 2)
//                         champOppHalf = champVar.slice(champVar.length / 2)
//                     }else if(champVar.length === 2){
//                         champVarHalf = champVar.slice(0, 1)
//                         champOppHalf = champVar.slice(1)
//                     }
//                     else if(champVar.length === 1 || champVar.length === 0){
//                         this.databaseSetLap = false
//                     }
//                     if(this.databaseSetLap === true) {
//                         for (var k = 0; k < champVarHalf.length; k++) {
//                             champ.push(champVarHalf[k])
//                             champOpp.push(champOppHalf[k])
//                         }
//                     }
//                 }
//                 function shuffleArray(array) {
//                     for (let i = array.length - 1; i > 0; i--) {
//                         const j = Math.floor(Math.random() * (i + 1));
//                         [array[i], array[j]] = [array[j], array[i]];
//                     }
//                 }
//                 console.log("------------0000000000000000------------")
//                 for (var i = 0; i < champ.length; i++) {
//                     await db.query('INSERT INTO"' + dated + '"("dateGame","lap","devicesId","userId","userdatumId","username","rating","typeId","brandId","userdatumIdOpp","oppUserId","oppUsername","oppRating","oppBrand") ' +
//                         'VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)',
//                         [moment(dated).add(timeLap, timeChoice).format('YYYY-MM-DD HH:mm:ss'), timeLap+1, champ[i].id, champ[i].userId, champ[i].userdatumId, champ[i].username, champ[i].rating, champ[i].typeId, champ[i].brandId, champOpp[i].userdatumId, champOpp[i].userId, champOpp[i].username, champOpp[i].rating, champOpp[i].brandId])
//                         console.log("------------1111111111111------------")
//                 }
//                 if (lastUser.length > 0) {
//                     for (var i = 0; i < lastUser.length; i++) {
//                         await db.query('INSERT INTO"' + dated + '"("dateGame","lap","devicesId","userId","userdatumId","username","rating","typeId","brandId","userdatumIdOpp","oppUserId","oppUsername","oppRating","oppBrand","oppCheck") ' +
//                             'VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,\'true\')',
//                             [moment(dated).add(timeLap, timeChoice).format('YYYY-MM-DD HH:mm:ss'), timeLap+1, lastUser[i].id, lastUser[i].userId, lastUser[i].userdatumId, lastUser[i].username, lastUser[i].rating, lastUser[i].typeId, lastUser[i].brandId, lastUser[i].userdatumId, lastUser[i].userId, lastUser[i].username, lastUser[i].rating, lastUser[i].brandId])
//                         console.log("------------222222222222222------------")
//                     }
//                 }
//                 console.log("1 основной цикл лап")
//                 const a = 1
//             }catch (e){
//                 console.log("2     error lap2 " + e.message)
//             }
//         }
//     }
//
//     async createChampTable(dated) {
//         try {
//             if(moment().add(15, 'seconds').isBefore(moment(dated).format('YYYY-MM-DD HH:mm:ss'))) { this.dataStart = true}
//
//             if(moment(dated).isSameOrBefore(moment().format('YYYY-MM-DD HH:mm:ss'),'minutes') && this.dataStart === true){
//                 this.dataStart = false
//                 //1
//                 await queryInterface.createTable(dated, {
//                     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//                     dateGame: {type: DataTypes.DATE, unique: false, allowNull: true},
//                     lap: {type: DataTypes.INTEGER, unique: false, allowNull: true},
//                     devicesId: {type: DataTypes.INTEGER, unique: false, allowNull: true },
//                     userId: {type: DataTypes.INTEGER, unique: false, allowNull: true },
//                     userdatumId: {type: DataTypes.INTEGER, unique: false, allowNull: true },
//                     username: {type: DataTypes.STRING, unique: false, allowNull: true },
//                     rating: {type: DataTypes.INTEGER, unique: false, allowNull: true },
//                     typeId: {type: DataTypes.INTEGER, unique: false, allowNull: true },
//                     brandId: {type: DataTypes.INTEGER, unique: false, allowNull: true },
//                     userdatumIdOpp: {type: DataTypes.INTEGER, unique: false, allowNull: true },
//                     oppUserId: {type: DataTypes.INTEGER, unique: false, allowNull: true },
//                     oppUsername: {type: DataTypes.STRING, unique: false, allowNull: true },
//                     oppRating: {type: DataTypes.INTEGER, unique: false, allowNull: true },
//                     oppBrand: {type: DataTypes.INTEGER, unique: false, allowNull: true },
//                     userCheck: {type: DataTypes.BOOLEAN, unique: false, allowNull: true, defaultValue: false },
//                     oppCheck: {type: DataTypes.BOOLEAN, unique: false, allowNull: true, defaultValue: false },
//                     dateMatch: {type: DataTypes.DATE, unique: false, allowNull: true },
//                     imgfu: {type: DataTypes.STRING, allowNull: true},
//                     imgfo: {type: DataTypes.STRING, allowNull: true},
//                     linku: {type: DataTypes.STRING, allowNull: true},
//                     linko: {type: DataTypes.STRING, allowNull: true},
//
//                 });
//
//                 //Table to massive brandChamp
//                 var champ = []
//                 var champOpp = []
//                 const typesIdChamp = await db.query('SELECT * FROM types WHERE types.name = $1', [dated]) //idType
//                 const databaseTypeStart = []
//                 const sumBrand = await db.query('SELECT * FROM brands')
//
//                 //three last
//
//                 var champVarHalf = []
//                 var champOppHalf = []
//                 var lastUser=[]
//                 for (var i = 1; i < sumBrand.rows.length + 1; i++) {
//                     databaseTypeStart[i] = await db.query('SELECT * , devices.id AS id FROM devices INNER JOIN userdata ON devices."userId"=userdata."userId" WHERE devices."typeId" = $1 AND devices."brandId" = $2' , [typesIdChamp.rows[0].id, i]) //data
//
//                     var champVar = []
//                     for (var j = 0; j < databaseTypeStart[i].rows.length; j++) {
//                         champVar.push(databaseTypeStart[i].rows[j])
//                     }
//                     shuffleArray(champVar)
//
//                     if(champVar.length % 2 !== 0 ){
//                         lastUser.push(champVar.pop())
//                     }
//                     champVarHalf = champVar.slice(0, champVar.length/2)
//                     champOppHalf = champVar.slice(champVar.length/2)
//
//                     for (var k = 0; k < champVarHalf.length; k++) {
//                         champ.push(champVarHalf[k])
//                         champOpp.push(champOppHalf[k])
//                     }
//                 }
//
//                 function shuffleArray(array) {
//                     for (let i = array.length - 1; i > 0; i--) {
//                         const j = Math.floor(Math.random() * (i + 1));
//                         [array[i], array[j]] = [array[j], array[i]];
//                     }
//                 }
//
//                 for (var i = 0; i < champ.length; i++) {
//                     await db.query('INSERT INTO"' + dated + '"("dateGame","lap","devicesId","userId","userdatumId","username","rating","typeId","brandId","userdatumIdOpp","oppUserId","oppUsername","oppRating","oppBrand") ' +
//                         'VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)',
//                         [dated, 1, champ[i].id, champ[i].userId, champ[i].userdatumId, champ[i].username, champ[i].rating, champ[i].typeId, champ[i].brandId, champOpp[i].userdatumId, champOpp[i].userId, champOpp[i].username, champOpp[i].rating, champOpp[i].brandId])
//                 }
//
//                 if(lastUser.length > 0){
//                     for (var i = 0; i < lastUser.length; i++) {
//                         await db.query('INSERT INTO"' + dated + '"("dateGame","lap","devicesId","userId","userdatumId","username","rating","typeId","brandId","userdatumIdOpp","oppUserId","oppUsername","oppRating","oppBrand","oppCheck") ' +
//                             'VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,\'true\')',
//                             [dated, 1, lastUser[i].id, lastUser[i].userId, lastUser[i].userdatumId, lastUser[i].username, lastUser[i].rating, lastUser[i].typeId, lastUser[i].brandId, lastUser[i].userdatumId, lastUser[i].userId, lastUser[i].username, lastUser[i].rating, lastUser[i].brandId])
//                     }
//                 }
//                 this.minutesStopLap = 0
//                 console.log("createChampTable 1       " + moment.preciseDiff(moment(), moment(moment(dated))))
//             }else{
//                 console.log("createChampTable 2       " + moment.preciseDiff(moment(), moment(moment(dated))))
//             }
//         }catch (e){
//             console.log("createChampTable " + e)
//         }
//     }
// }
//
// module.exports = (m) => new startChamp(m);
