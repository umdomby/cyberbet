//import moment from "moment";
//import ru from 'moment/locale/ru';
const moment = require('moment', 'moment-precise-range-plugin');
const {Device, User, Userdata, DeviceInfo, Brand, Type} = require('../models/models')
const ApiError = require('../error/ApiError');
const db = require('../dbPool')
const sequelize = require('../db')
const QiwiBillPaymentsAPI = require('@qiwi/bill-payments-node-js-sdk')

class qiwiStatus {
    constructor() {}
    showMessage(){
        setInterval(async () => await this.controlPayStatus(), 15000)
        setInterval(()=> this.dateControlDelete(), 1000*60)
        setInterval(()=> this.controlPayTypes(), 15000)
        setInterval(()=> this.getUsersDataBase(), 300000)
        setInterval(()=> this.getUsersPointGP(), 200000)
        setInterval(()=> this.getUsersPoint(), 200000)
    }

    async getUsersPoint() {
        try{
            var userPoint = []
            var test = {}
            var maxPointUser = {}
            var maxPointOpp = {}
            var maxUserMassive = []
            var maxOppMassive = []
            const types = await db.query('SELECT * FROM types WHERE types.grandprix = false AND (types.start = true OR types.start = null)')

            for (let i = 0; i < types.rows.length; i++) {
                userPoint.push(await db.query('SELECT * FROM brands WHERE idname = $1', [types.rows[i].id]))
                for (let j = 0; j < userPoint.length; j++) {
                    for (let k = 0; k < userPoint[j].rows.length; k++) {
                        //maxPoint.push(await db.query('SELECT champ, "oppUsername", username, "brandName", max("lapPoint") FROM"' + types.rows[i].nametype + '"WHERE "brandName" = $1 GROUP BY champ, "oppUsername", username, "brandName"',[userPoint[j].rows[k].name]))

                        maxPointUser = await db.query('SELECT champ, username, "brandName", max("lapPoint") FROM"' + types.rows[i].nametype + '"WHERE "brandName" = $1 GROUP BY champ, username, "brandName"',[userPoint[j].rows[k].name])
                        maxPointOpp = await db.query('SELECT champ, "oppUsername", "brandName", max("lapPoint") FROM"' + types.rows[i].nametype + '"WHERE "brandName" = $1 GROUP BY champ, "oppUsername", "brandName"',[userPoint[j].rows[k].name])

                        for(let a = 0; a < maxPointUser.rows.length; a++) {
                            maxUserMassive.push(maxPointUser.rows[a])
                        }
                        for(let a = 0; a < maxPointOpp.rows.length; a++) {
                            maxOppMassive.push(maxPointOpp.rows[a])
                        }

                        if(maxUserMassive.length > maxOppMassive.length) {
                            for (let a = 0; a < maxUserMassive.length; a++) {
                                if (maxOppMassive.length > a) {
                                    for (let d = 0; d < maxOppMassive.length; d++) {
                                        if (maxUserMassive.length > d) {
                                            if (maxUserMassive[a].username === maxOppMassive[d].oppUsername
                                                && maxUserMassive[a].champ === maxOppMassive[d].champ
                                                && maxUserMassive[a].brandName === maxOppMassive[d].brandName
                                                && maxUserMassive[a].max < maxOppMassive[d].max) {
                                                maxUserMassive[a].max = maxOppMassive[d].max
                                            }
                                        }
                                    }
                                }
                            }

                        }

                        if(maxUserMassive.length < maxOppMassive.length) {
                            for (let a = 0; a < maxOppMassive.length; a++) {
                                if (maxUserMassive.length > a) {
                                    for (let d = 0; d < maxUserMassive.length; d++) {
                                        if (maxOppMassive.length > d) {
                                            if ( maxOppMassive[a].oppUsername === maxUserMassive[d].username
                                                && maxOppMassive[a].champ === maxUserMassive[d].champ
                                                && maxOppMassive[a].brandName === maxUserMassive[d].brandName
                                                && maxOppMassive[a].max < maxUserMassive[d].max ) {
                                                maxOppMassive[a].max = maxUserMassive[d].max
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        const a = 2
                    }
                }
            }
            if(maxUserMassive.length > maxOppMassive.length) {
                for (let f = 0; f < maxUserMassive.length; f++) {
                    test = await db.query('SELECT * FROM rating_maps WHERE "rating_username" = $1 AND "rating_type"= $2 AND "rating_brand" = $3', [maxUserMassive[f].username, maxUserMassive[f].champ, maxUserMassive[f].brandName])
                    if(test.rows.length > 0) {
                        await db.query('UPDATE rating_maps SET "rating_username" = $1, "rating_type"= $2, "rating_brand" = $3, "rating_rate" = $4 WHERE "rating_username" = $1 AND "rating_type"= $2 AND "rating_brand" = $3', [maxUserMassive[f].username, maxUserMassive[f].champ, maxUserMassive[f].brandName, maxUserMassive[f].max])
                        const h = 0
                    }else{
                        await db.query('INSERT INTO rating_maps ("rating_username","rating_type","rating_brand","rating_rate","createdAt", "updatedAt") ' +
                            'VALUES ($1,$2,$3,$4,Now(),Now())',
                            [maxUserMassive[f].username, maxUserMassive[f].champ, maxUserMassive[f].brandName, maxUserMassive[f].max])
                    }
                }
            }else{
                for (let f = 0; f < maxOppMassive.length; f++) {
                    test = await db.query('SELECT * FROM rating_maps WHERE "rating_username" = $1 AND "rating_type"= $2 AND "rating_brand" = $3', [maxOppMassive[f].oppUsername, maxOppMassive[f].champ, maxOppMassive[f].brandName])
                    if(test.rows.length > 0) {
                        await db.query('UPDATE rating_maps SET "rating_username" = $1, "rating_type"= $2, "rating_brand" = $3, "rating_rate" = $4 WHERE "rating_username" = $1 AND "rating_type"= $2 AND "rating_brand" = $3', [maxOppMassive[f].oppUsername, maxOppMassive[f].champ, maxOppMassive[f].brandName, maxOppMassive[f].max])
                        const h = 0
                    }else{
                        await db.query('INSERT INTO rating_maps ("rating_username","rating_type","rating_brand","rating_rate","createdAt", "updatedAt") ' +
                            'VALUES ($1,$2,$3,$4,Now(),Now())',
                            [maxOppMassive[f].oppUsername, maxOppMassive[f].champ, maxOppMassive[f].brandName, maxOppMassive[f].max])
                    }
                }
            }
            const a = 0
        }catch (e){
            console.log(e + "error function getUsersPoint()")
        }
    }


    async getUsersPointGP() {
        try{
            var userPoint = []
            // var maxPointUser = []
            // var maxPointOpp = []
            var test = {}
            var maxPointUser = {}
            var maxPointOpp = {}
            var maxUserMassive = []
            var maxOppMassive = []
            var maxPointAll = []
            const types = await db.query('SELECT * FROM types WHERE types.start = true AND types.grandprix = true')

            for (let i = 0; i < types.rows.length; i++) {

                userPoint.push(await db.query('SELECT * FROM brands WHERE idname = $1', [types.rows[i].id]))
                for (let j = 0; j < userPoint.length; j++) {
                    for (let k = 0; k < userPoint[j].rows.length; k++) {
                        //maxPoint.push(await db.query('SELECT champ, "oppUsername", username, "brandName", max("lapPoint") FROM"' + types.rows[i].nametype + '"WHERE "brandName" = $1 GROUP BY champ, "oppUsername", username, "brandName"',[userPoint[j].rows[k].name]))

                        maxPointUser = await db.query('SELECT champ, username, "brandName", max("lapPoint") FROM"' + types.rows[i].nametype + '"WHERE "brandName" = $1 GROUP BY champ, username, "brandName"',[userPoint[j].rows[k].name])
                        maxPointOpp = await db.query('SELECT champ, "oppUsername", "brandName", max("lapPoint") FROM"' + types.rows[i].nametype + '"WHERE "brandName" = $1 GROUP BY champ, "oppUsername", "brandName"',[userPoint[j].rows[k].name])

                        for(let a = 0; a < maxPointUser.rows.length; a++) {
                            maxUserMassive.push(maxPointUser.rows[a])
                        }
                        for(let a = 0; a < maxPointOpp.rows.length; a++) {
                            maxOppMassive.push(maxPointOpp.rows[a])
                        }

                        if(maxUserMassive.length > maxOppMassive.length) {
                            for (let a = 0; a < maxUserMassive.length; a++) {
                                if (maxOppMassive.length > a) {
                                    for (let d = 0; d < maxOppMassive.length; d++) {
                                        if (maxUserMassive.length > d) {
                                            if (maxUserMassive[a].username === maxOppMassive[d].oppUsername
                                                && maxUserMassive[a].champ === maxOppMassive[d].champ
                                                && maxUserMassive[a].brandName === maxOppMassive[d].brandName
                                                && maxUserMassive[a].max < maxOppMassive[d].max) {
                                                maxUserMassive[a].max = maxOppMassive[d].max
                                            }
                                        }
                                    }
                                }
                            }

                        }

                        if(maxUserMassive.length < maxOppMassive.length) {
                            for (let a = 0; a < maxOppMassive.length; a++) {
                                if (maxUserMassive.length > a) {
                                    for (let d = 0; d < maxUserMassive.length; d++) {
                                        if (maxOppMassive.length > d) {
                                            if ( maxOppMassive[a].oppUsername === maxUserMassive[d].username
                                                && maxOppMassive[a].champ === maxUserMassive[d].champ
                                                && maxOppMassive[a].brandName === maxUserMassive[d].brandName
                                                && maxOppMassive[a].max < maxUserMassive[d].max ) {
                                                maxOppMassive[a].max = maxUserMassive[d].max
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        const a = 2
                    }
                }
            }
            if(maxUserMassive.length > maxOppMassive.length) {
                for (let f = 0; f < maxUserMassive.length; f++) {
                    test = await db.query('SELECT * FROM ratings WHERE "rating_username" = $1 AND "rating_type"= $2 AND "rating_brand" = $3', [maxUserMassive[f].username, maxUserMassive[f].champ, maxUserMassive[f].brandName])
                    if(test.rows.length > 0) {
                        await db.query('UPDATE ratings SET "rating_username" = $1, "rating_type"= $2, "rating_brand" = $3, "rating_rate" = $4 WHERE "rating_username" = $1 AND "rating_type"= $2 AND "rating_brand" = $3', [maxUserMassive[f].username, maxUserMassive[f].champ, maxUserMassive[f].brandName, maxUserMassive[f].max])
                        const h = 0
                    }else{
                        await db.query('INSERT INTO ratings ("rating_username","rating_type","rating_brand","rating_rate","createdAt", "updatedAt") ' +
                            'VALUES ($1,$2,$3,$4,Now(),Now())',
                            [maxUserMassive[f].username, maxUserMassive[f].champ, maxUserMassive[f].brandName, maxUserMassive[f].max])
                    }
                }
            }else{
                for (let f = 0; f < maxOppMassive.length; f++) {
                    test = await db.query('SELECT * FROM ratings WHERE "rating_username" = $1 AND "rating_type"= $2 AND "rating_brand" = $3', [maxOppMassive[f].oppUsername, maxOppMassive[f].champ, maxOppMassive[f].brandName])
                    if(test.rows.length > 0) {
                        await db.query('UPDATE ratings SET "rating_username" = $1, "rating_type"= $2, "rating_brand" = $3, "rating_rate" = $4 WHERE "rating_username" = $1 AND "rating_type"= $2 AND "rating_brand" = $3', [maxOppMassive[f].oppUsername, maxOppMassive[f].champ, maxOppMassive[f].brandName, maxOppMassive[f].max])
                        const h = 0
                    }else{
                        await db.query('INSERT INTO ratings ("rating_username","rating_type","rating_brand","rating_rate","createdAt", "updatedAt") ' +
                            'VALUES ($1,$2,$3,$4,Now(),Now())',
                            [maxOppMassive[f].oppUsername, maxOppMassive[f].champ, maxOppMassive[f].brandName, maxOppMassive[f].max])
                    }
                }
            }

            const a = 0
        }catch (e){
            console.log(e + "error function getUsersPoint()")
        }
    }


    async getUsersDataBase() {
        try{
            var users = await db.query('SELECT * FROM userdata')
            const types = await db.query('SELECT * FROM types WHERE types.start IS NULL OR types.start = true')

            for(let h = 0; h < users.rows.length; h++) {
                const promo = await db.query('SELECT COUNT(promo) FROM userdata WHERE promo = $1', [users.rows[h].username])
                //const userWin = []
                const userWinOpp = []
                for (let i = 0; i < types.rows.length; i++) {
                    //userWin.push(await db.query('SELECT * FROM"' + types.rows[i].nametype + "_win" + '"WHERE "userdataId" = $1', [users.rows[h].id]))
                    userWinOpp.push(await db.query('SELECT * FROM"' + types.rows[i].nametype + '"WHERE ("userdatumId" = $1 OR "userdatumIdOpp" = $1) AND "userdatumId" != "userdatumIdOpp"', [users.rows[h].id]))
                }
                var countWin = 0
                var countLoss = 0
                for (let i = 0; i < userWinOpp.length; i++) {
                    for (let a = 0; a < userWinOpp[i].rows.length; a++) {
                        if (userWinOpp[i].rows[a].userCheck === false && users.rows[h].username === userWinOpp[i].rows[a].username) {
                            countWin += 1
                        }
                        if (userWinOpp[i].rows[a].oppCheck === false && users.rows[h].username === userWinOpp[i].rows[a].oppUsername) {
                            countWin += 1
                        }
                        if (userWinOpp[i].rows[a].userCheck === true && users.rows[h].username === userWinOpp[i].rows[a].username) {
                            countLoss += 1
                        }
                        if (userWinOpp[i].rows[a].oppCheck === true && users.rows[h].username === userWinOpp[i].rows[a].oppUsername) {
                            countLoss += 1
                        }
                    }
                }
                const donatesCyberbet = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND username = $1 AND code_transaction = 2 GROUP BY username ORDER BY sum(amount) DESC', [users.rows[h].username])
                var dCyberbet = 0
                if(donatesCyberbet.rows.length > 0){
                    dCyberbet = donatesCyberbet.rows[0].sum
                }
                const donatesTypes  = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND username = $1 AND code_transaction = 1 GROUP BY username ORDER BY sum(amount) DESC', [users.rows[h].username])
                var dTypes = 0
                if(donatesTypes.rows.length > 0){
                    dTypes = donatesTypes.rows[0].sum
                }
                const donatesUsers  = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND username = $1 AND code_transaction = 3 GROUP BY username ORDER BY sum(amount) DESC', [users.rows[h].username])
                var dUsers = 0
                if(donatesUsers.rows.length > 0){
                    dUsers = donatesUsers.rows[0].sum
                }
                const paymentGame  = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND username = $1 AND code_transaction = 4 GROUP BY username ORDER BY sum(amount) DESC', [users.rows[h].username])
                var pGame = 0
                if(paymentGame.rows.length > 0){
                    pGame = paymentGame.rows[0].sum
                }
                const fundGame  = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND username = $1 AND code_transaction = 5 GROUP BY username ORDER BY sum(amount) DESC', [users.rows[h].username])
                var pFund = 0
                if(fundGame.rows.length > 0){
                    pFund = fundGame.rows[0].sum
                }


                //const testUser = await db.query('SELECT * FROM ratings WHERE rating_username = $1', [users.rows[h].username])
                //

                const ratingCyberbet = await db.query('SELECT SUM(rating_rate) FROM ratings WHERE rating_username = $1 GROUP BY rating_username', [users.rows[h].username])
                var ratingcy = 0
                //if(ratingCyberbet.length > 0) {
                    if (ratingCyberbet.rows.length > 0) {
                        ratingcy = ratingCyberbet.rows[0].sum
                    }
                //}


                const ratingCyberbetMap = await db.query('SELECT SUM(rating_rate) FROM rating_maps WHERE rating_username = $1 GROUP BY rating_username', [users.rows[h].username])
                var ratingcymap = 0
                //if (ratingCyberbetMap.length > 0) {
                    if (ratingCyberbetMap.rows.length > 0) {
                        ratingcymap = ratingCyberbetMap.rows[0].sum
                    }
                //}

                // users.rows[h].countWin = countWin
                // users.rows[h].countLoss = countLoss
                // users.rows[h].promoCount = promo.rows[0].count
                // users.rows[h].dCyberbet = dCyberbet
                // users.rows[h].dTypes = dTypes
                // users.rows[h].dUsers = dUsers
                // users.rows[h].pGame = pGame
                // users.rows[h].pFund = pFund
                // users.rows[h].game = countWin + countLoss

                await db.query('UPDATE userdata SET "countWin"=$2,"countLoss"=$3,"promoCount"=$4,"dCyberbet"=$5,"dTypes"=$6,"dUsers"=$7,"pGame"=$8,"pFund"=$9,"game"=$10,"ratingcy"=$11,"ratingcymap"=$12 WHERE username = $1',
                    [users.rows[h].username, countWin, countLoss, promo.rows[0].count, dCyberbet, dTypes, dUsers, pGame, pFund, countWin + countLoss, ratingcy, ratingcymap])

            }
            const a = 0
        }catch (e){
            console.log(e + "error function getUsersDataBase()")
        }
    }

    async controlPayTypes(){
        //code_transaction
        //1 - donate types brand
        //2 - cyberbet donate
        //3 - users donate
        //4 - pay game user
        //5 - fund-to-game
        //7 - types donate
        //8 - all pay types users - no sum baseData
        //9 - all pay types users read donate link
        //10 - fund GP
        try {
            const donates_best = await db.query('SELECT typeid, sum(amount) FROM donates WHERE status = true AND (code_transaction = 1 OR code_transaction = 4 OR code_transaction = 5 OR code_transaction = 9) GROUP BY typeid ORDER BY sum(amount) DESC')
            for(let i = 0; i < donates_best.rows.length; i++) {
                await db.query('UPDATE types SET fund = $1 WHERE id = $2', [donates_best.rows[i].sum, donates_best.rows[i].typeid])
            }

            const donates_win_type = await db.query('SELECT typeid, sum(amount) FROM donates WHERE status = true AND (code_transaction = 7 OR code_transaction = 10) GROUP BY typeid ORDER BY sum(amount) DESC')
            for(let i = 0; i < donates_win_type.rows.length; i++) {
                await db.query('UPDATE types SET winner = $1 WHERE id = $2', [donates_win_type.rows[i].sum, donates_win_type.rows[i].typeid])
            }

            const donates_brands = await db.query('SELECT brandid, sum(amount) FROM donates WHERE status = true AND code_transaction = 1 GROUP BY brandid ORDER BY sum(amount) DESC')
            for(let i = 0; i < donates_brands.rows.length; i++) {
                await db.query('UPDATE brands SET amount = $1 WHERE id = $2', [donates_brands.rows[i].sum, donates_brands.rows[i].brandid])
            }

            const payment_brand_payment = await db.query('SELECT brandid, sum(amount) FROM donates WHERE status = true AND (code_transaction = 4 OR code_transaction = 5 OR code_transaction = 9) GROUP BY brandid ORDER BY sum(amount) DESC')
            for(let i = 0; i < payment_brand_payment.rows.length; i++) {
                await db.query('UPDATE brands SET brand_payment = $1 WHERE id = $2', [payment_brand_payment.rows[i].sum, payment_brand_payment.rows[i].brandid])
            }

            //donates to users and minus fund to game
            const donates_to_user = await db.query('SELECT nametype, sum(amount) FROM donates WHERE status = true AND code_transaction = 3 GROUP BY nametype ORDER BY sum(amount) DESC')
            for(let i = 0; i < donates_to_user.rows.length; i++) {
                const sum_minus_5 = await db.query('SELECT sum(amount) FROM donates WHERE status = true AND code_transaction = 5 AND username = $1 ORDER BY sum(amount) DESC', [donates_to_user.rows[i].nametype])
                var result = 0
                if(sum_minus_5.rows[0].sum > 0) {
                    result = donates_to_user.rows[i].sum - sum_minus_5.rows[0].sum
                    await db.query('UPDATE userdata SET user_fund = $1 WHERE username = $2', [result, donates_to_user.rows[i].nametype])

                }else{
                    result = donates_to_user.rows[i].sum
                    await db.query('UPDATE userdata SET user_fund = $1 WHERE username = $2', [result, donates_to_user.rows[i].nametype])
                }
            }
            // const donates_game_user = await db.query('SELECT * FROM donates WHERE status = true AND code_transaction = 4')
            // const devices_game_user = await db.query('SELECT * FROM donates WHERE dev_start = false')
            // for(let i = 0; i < donates_game_user.rows.length; i++){
            //     for(let z = 0; z < devices_game_user.rows.length; z++){
            //         if(donates_game_user.rows[i].billId === devices_game_user.rows[z].dev_billid){
            //
            //         }
            //     }
            // }

            const a = 1
        }catch (e) {
            console.log(e + "error function controlPayTypes()")
        }
    }

    async dateControlDelete(){
        try {
            await db.query('DELETE FROM donates WHERE "createdAt" < NOW() - INTERVAL \'1 HOURS\' AND status = false')
        }catch (e) {
            console.log(e)
        }
    }


    async controlPayStatus(){
        try {
            const billId  = await db.query('SELECT * FROM donates WHERE status = false')
            const SECRET_KEY = 'eyJ2ZXJzaW9uIjoiUDJQIiwiZGF0YSI6eyJwYXlpbl9tZXJjaGFudF9zaXRlX3VpZCI6InpubDk0OC0wMCIsInVzZXJfaWQiOiIzNzUyOTc4NTIyMzYiLCJzZWNyZXQiOiI1OTYzMjdlNzRlYTEzMjZhYTk3MWVjN2I1NzkxODg4YTk2MWQxNTkyZTYzYjQxOTAyODY5MWEyMTI5YTgyMDRjIn19';
            const qiwiApi = new QiwiBillPaymentsAPI(SECRET_KEY);
            const a = 2


            if(billId.rows.length > 0) {
                for (var i = 0; i < billId.rows.length; i++) {
                    //setTimeout(() => {
                    if(billId.rows[i].billId !== undefined || billId.rows[i].billId !== null) {
                        if(billId.rows[i].code_transaction !== 8 && billId.rows[i].code_transaction !== 10) {
                            qiwiApi.getBillInfo(billId.rows[i].billId).then(async data => {
                                if (data.status.value === "PAID") {
                                    await db.query('UPDATE donates SET status = true WHERE "billId" = $1', [data.billId])
                                    await db.query('UPDATE devices SET dev_start = true WHERE dev_billid = $1', [data.billId])
                                }
                            });
                        }

                        if(billId.rows[i].code_transaction === 8) {
                            qiwiApi.getBillInfo(billId.rows[i].billId).then(async data => {
                                if (data.status.value === "PAID") {
                                    await db.query('UPDATE donates SET status = true WHERE "billId" = $1', [data.billId])
                                    for (let i = 0; i < billId.rows.length; i++) {
                                        var userName = billId.rows[i].nametype.split(';')
                                        var userBrandId = billId.rows[i].brandName.split(';')
                                        //var brandId = billId.rows[i].brandid.split(';')
                                        userName.pop()
                                        for (let a = 0; a < userName.length; a++) {
                                            await db.query('UPDATE devices SET dev_start = true, dev_billid = $3 WHERE "typeId" = $1 AND "dev_username" = $2 AND "brandId" = $4', [billId.rows[i].typeid, userName[a], data.billId, Number(userBrandId[a])])

                                            await db.query('INSERT INTO donates (amount, username, "billId", comment, "createdAt", "updatedAt", nametype, typeid, "brandName", status, brandid, code_transaction)' +
                                                'VALUES ($1,$2,$3,$4,Now(),Now(),$5,$6,$7,$8,$9,$10)',
                                            [billId.rows[i].amount/userName.length, userName[a], data.billId, "pay all users to game", billId.rows[i].nametype, billId.rows[i].typeid, userBrandId[a], true, Number(userBrandId[a]), 9])
                                        }
                                    }
                                }
                            });
                        }
                        if(billId.rows[i].code_transaction === 10) {
                            qiwiApi.getBillInfo(billId.rows[i].billId).then(async data => {
                                if (data.status.value === "PAID") {
                                    await db.query('UPDATE donates SET status = true WHERE "billId" = $1', [data.billId])
                                    for (let i = 0; i < billId.rows.length; i++) {
                                        var userName = billId.rows[i].nametype.split(';')
                                        var userBrandId = billId.rows[i].brandName.split(';')
                                        //var brandId = billId.rows[i].brandid.split(';')
                                        userName.pop()
                                        for (let a = 0; a < userName.length; a++) {
                                            await db.query('UPDATE devices SET dev_start = true, dev_billid = $3 WHERE "typeId" = $1 AND "dev_username" = $2 AND "brandId" = $4', [billId.rows[i].typeid, userName[a], data.billId, Number(userBrandId[a])])
                                        }
                                        // await db.query('INSERT INTO donates (amount, username, "billId", comment, "createdAt", "updatedAt", nametype, typeid, "brandName", status, brandid, code_transaction)' +
                                        //     'VALUES ($1,$2,$3,$4,Now(),Now(),$5,$6,$7,$8,$9,$10)',
                                        //     [billId.rows[i].amount, userName, data.billId, "pay all users to game GP", billId.rows[i].nametype, billId.rows[i].typeid, userBrandId, true, null, 10])
                                    }
                                }
                            });
                        }
                    }
                }
            }

        }catch (e) {
            console.log(e + " error check verify")
        }
    }
}

module.exports = (m) => new qiwiStatus(m);
