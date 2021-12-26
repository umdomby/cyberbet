//public   48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPzNDZxjKyMzuvcPyWkiP53g3Rgh3SDWEqHeCTMLsLNX9A6b7E92mVYmD6Uu5FgPNBqNPCtDsJj2pFjaEYBqDdKNZfd3ALKjtQY3tBdk5me
//secret   eyJ2ZXJzaW9uIjoiUDJQIiwiZGF0YSI6eyJwYXlpbl9tZXJjaGFudF9zaXRlX3VpZCI6InpubDk0OC0wMCIsInVzZXJfaWQiOiIzNzUyOTc4NTIyMzYiLCJzZWNyZXQiOiI1OTYzMjdlNzRlYTEzMjZhYTk3MWVjN2I1NzkxODg4YTk2MWQxNTkyZTYzYjQxOTAyODY5MWEyMTI5YTgyMDRjIn19
const ApiError = require('../error/ApiError');
const db = require('../dbPool')
const QiwiBillPaymentsAPI = require('@qiwi/bill-payments-node-js-sdk')


class QiwiController {

    async qiwiPayUsers(req, res, next){
        //code_transaction
        //1 - types donate brand
        //2 - cyberbet donate
        //3 - users donate
        //4 - pay game user
        //5 - fund-to-game
        //7 - types donate
        //8 - all pay types users
        try {
            //1
            const donates_champ = await db.query('SELECT * FROM donates WHERE status = true AND (code_transaction = 1 OR code_transaction = 7) ORDER BY "createdAt" DESC')
            const donates_champ_best = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND (code_transaction = 1 OR code_transaction = 7) GROUP BY username ORDER BY sum(amount) DESC')
            //2
            const donates_brands = await db.query('SELECT * FROM types JOIN brands on idname = types.id ORDER BY idname DESC')
            const donates_types = await db.query('SELECT * FROM types ORDER BY fund DESC')
            //3
            const donates_to_users = await db.query('SELECT * FROM donates WHERE status = true AND code_transaction = 3 ORDER BY "createdAt" DESC')
            const donates_to_users_best = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND code_transaction = 3 GROUP BY username ORDER BY sum(amount) DESC')
            //4
            const donates_cyberbet = await db.query('SELECT * FROM donates WHERE status = true AND code_transaction = 2 ORDER BY "createdAt" DESC')
            const donates_cyberbet_best = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND code_transaction = 2 GROUP BY username ORDER BY sum(amount) DESC')
            //5
            const pay_to_game = await db.query('SELECT * FROM donates WHERE status = true AND (code_transaction = 4 OR code_transaction = 8) ORDER BY "createdAt" DESC')
            const pay_to_game_best = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND (code_transaction = 4 OR code_transaction = 8) GROUP BY username ORDER BY sum(amount) DESC')
            //6
            const fund_to_game = await db.query('SELECT * FROM donates WHERE status = true AND code_transaction = 5 ORDER BY "createdAt" DESC')
            const fund_to_game_best = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND code_transaction = 5 GROUP BY username ORDER BY sum(amount) DESC')


            return res.json({
                donates_champ,
                donates_champ_best,
                donates_brands,
                donates_types,
                donates_to_users,
                donates_to_users_best,
                donates_cyberbet,
                donates_cyberbet_best,
                pay_to_game,
                pay_to_game_best,
                fund_to_game,
                fund_to_game_best,
            })

        }catch (e) {
            return next(ApiError.internal("qiwi error users: " + e.message))
        }
    }

    async qiwiLink(req, res, next) {

        try {
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

            // const pay = req.params.pay
            // const login = req.params.login
            // const description = req.params.description

            let {pay, login, nametype, typeid, description, brandName, brandid, code_transaction} = req.query


            const SECRET_KEY = 'eyJ2ZXJzaW9uIjoiUDJQIiwiZGF0YSI6eyJwYXlpbl9tZXJjaGFudF9zaXRlX3VpZCI6InpubDk0OC0wMCIsInVzZXJfaWQiOiIzNzUyOTc4NTIyMzYiLCJzZWNyZXQiOiI1OTYzMjdlNzRlYTEzMjZhYTk3MWVjN2I1NzkxODg4YTk2MWQxNTkyZTYzYjQxOTAyODY5MWEyMTI5YTgyMDRjIn19';
            const qiwiApi = new QiwiBillPaymentsAPI(SECRET_KEY);
            const publicKey = '48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPzNDZxjKyMzuvcPyWkiP53g3Rgh3SDWEqHeCTMLsLNX9A6b7E92mVYmD6Uu5FgPNBqNPCtDsJj2pFjaEYBqDdKNZfd3ALKjtQY3tBdk5me';

            //const billId = login + ":" + pay + ":" + nametype + ":" + pass_gen()
            const billId = pass_gen() + "-" + pass_gen() + "-" + pass_gen()

            const params = {
                publicKey,
                amount: pay,
                billId: billId,
                comment: description,
                // customer: 'nikANDMike',
                // map: 'JC',
                successUrl: 'https://merchant.com/payment/success?billId=375297852236'
            };

            const link = qiwiApi.createPaymentForm(params);
            await db.query('INSERT INTO donates (amount, username, "billId", comment, "createdAt", "updatedAt", nametype, typeid, "brandName", brandid, code_transaction)' +
                'VALUES ($1,$2,$3,$4,Now(),Now(),$5,$6,$7,$8,$9)',
                [Number(pay), login, billId, description, nametype, typeid, brandName, brandid, code_transaction])
            return res.json(link)

        }catch (e){
            return next(ApiError.internal("qiwi error: " + e.message))
        }
    }

    async qiwiLinkPayment(req, res, next) {
        try {
            let {billid, pay, login, nametype, typeid, description, brandName, brandid, code_transaction} = req.query
            const SECRET_KEY = 'eyJ2ZXJzaW9uIjoiUDJQIiwiZGF0YSI6eyJwYXlpbl9tZXJjaGFudF9zaXRlX3VpZCI6InpubDk0OC0wMCIsInVzZXJfaWQiOiIzNzUyOTc4NTIyMzYiLCJzZWNyZXQiOiI1OTYzMjdlNzRlYTEzMjZhYTk3MWVjN2I1NzkxODg4YTk2MWQxNTkyZTYzYjQxOTAyODY5MWEyMTI5YTgyMDRjIn19';
            const qiwiApi = new QiwiBillPaymentsAPI(SECRET_KEY);
            const publicKey = '48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPzNDZxjKyMzuvcPyWkiP53g3Rgh3SDWEqHeCTMLsLNX9A6b7E92mVYmD6Uu5FgPNBqNPCtDsJj2pFjaEYBqDdKNZfd3ALKjtQY3tBdk5me';
            const params = {
                publicKey,
                amount: pay,
                billId: billid,
                comment: description,
                successUrl: 'https://merchant.com/payment/success?billId=375297852236'
            };
            const link = qiwiApi.createPaymentForm(params);
            const billIdLenght = await db.query('SELECT "billId" FROM donates WHERE donates."billId" = $1', [billid])
            if(billIdLenght.rows.length > 0){}
            else{
                await db.query('INSERT INTO donates (amount, username, "billId", comment, "createdAt", "updatedAt", nametype, typeid, "brandName", brandid, code_transaction)' +
                'VALUES ($1,$2,$3,$4,Now(),Now(),$5,$6,$7,$8,$9)',
                [Number(pay), login, billid, description, nametype, typeid, brandName, brandid, code_transaction])
            }

            return res.json(link)
        }catch (e){
            return next(ApiError.internal("qiwi error: " + e.message))
        }
    }

    async qiwiLinkFund(req, res, next) {
        try {
            let {id, billid, pay, login, nametype, typeid, description, brandName, brandid, code_transaction} = req.body

            const devices_dev_amount = await db.query('SELECT * FROM devices WHERE dev_billid = $1', [billid])
            if(devices_dev_amount.rows[0].dev_start === false) {
                const userdata_user_fund = await db.query('SELECT * FROM userdata WHERE username = $1', [login])
                var result = 0
                if (userdata_user_fund.rows[0].user_fund > devices_dev_amount.rows[0].dev_amount) {
                    result = userdata_user_fund.rows[0].user_fund - devices_dev_amount.rows[0].dev_amount
                }
                await db.query('UPDATE userdata SET user_fund = $1 WHERE username = $2', [result, login])
                await db.query('INSERT INTO donates (amount, username, "billId", comment, "createdAt", "updatedAt", nametype, typeid, "brandName", brandid, code_transaction, status)' +
                    'VALUES ($1,$2,$3,$4,Now(),Now(),$5,$6,$7,$8,$9,$10)',
                    [Number(pay), login, billid, description, nametype, typeid, brandName, brandid, code_transaction, true])
                await db.query('UPDATE devices SET dev_start = true WHERE dev_billid = $1', [billid])
                return res.json("ok")
            }
            return res.json("dev_start true")
        }catch (e){
            return next(ApiError.internal("qiwi error: " + e.message))
        }
    }
}
module.exports = new QiwiController()


// Номер карты:
//     4890494710333550   Скопировать
// Действует до:
//     08/22 включительно
// Имя на карте:
//     При оплате можно указать любое имя английскими буквами
// CVV:
//     449
