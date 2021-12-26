const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Userdata, Basket} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
const db = require('../dbPool')

const generateJwt = (id, email, role, userdataid) => {
    return jwt.sign(
        {id, email, role, userdataid},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        try{
            const ipreg = req.headers['x-forwarded-for'] || req.socket.remoteAddress
            const {email, password, username, rating, twitch, youtube, facebook, instagram, telegram, vk, ok, role, promo} = req.body
            if (!email || !password || !username || !twitch || !rating) {
                return next(ApiError.badRequest('Некорректные данные: email, password, login heroes, rating или twitch'))
            }
            const candidate = await User.findOne({where: {email}})
            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким email уже существует'))
            }
            const candidateUsername = await Userdata.findOne({where: {username}})
            if (candidateUsername) {
                return next(ApiError.badRequest('Пользователь с таким login Heroes уже существует'))
            }
            //const candidateTwitch = await Userdata.findOne({where: {twitch}})
            // if (candidateTwitch) {
            //     return next(ApiError.badRequest('Пользователь с таким twitch уже существует'))
            // }
            if (twitch.slice(0, 21) !== 'https://www.twitch.tv'
                && twitch.slice(0, 20) !== 'http://www.twitch.tv'
                && twitch.slice(0, 17) !== 'https://twitch.tv'
                && twitch.slice(0, 16) !== 'http://twitch.tv'
            ) {
                return next(ApiError.badRequest('Введите правильный формат twitch'))
            }
            if (youtube.slice(0, 8) !== 'https://' && youtube.slice(0, 7) !== 'http://' && youtube !== ''
            ) {
                return next(ApiError.badRequest('Введите правильный формат youtube'))
            }
            if (facebook.slice(0, 8) !== 'https://' && facebook.slice(0, 7) !== 'http://' && facebook !== ''
            ) {
                return next(ApiError.badRequest('Введите правильный формат facebook'))
            }
            if (instagram.slice(0, 8) !== 'https://' && instagram.slice(0, 7) !== 'http://' && instagram !== ''
            ) {
                return next(ApiError.badRequest('Введите правильный формат instagram'))
            }
            if (telegram.slice(0, 13) !== 'https://t.me/' && telegram.slice(0, 12) !== 'http://t.me/' && telegram !== ''
            ) {
                return next(ApiError.badRequest('Введите правильный формат telegram'))
            }
            if (vk.slice(0, 8) !== 'https://' && vk.slice(0, 7) !== 'http://' && vk !== ''
            ) {
                return next(ApiError.badRequest('Введите правильный формат vk'))
            }
            if (ok.slice(0, 8) !== 'https://' && ok.slice(0, 7) !== 'http://' && ok !== ''
            ) {
                return next(ApiError.badRequest('Введите правильный формат ok'))
            }



            //const user = await User.create({email, password,  role})
            //await Basket.create({userId: user.id})
            const ipBanTrue = await db.query('SELECT * FROM userdata WHERE ban = true')
            var massiveTableBase = []
            for(var i = 0; i < ipBanTrue.rows.length; i++){
                massiveTableBase.push(ipBanTrue.rows[i].ipreg)
            }
            var ipBan = contains(massiveTableBase, ipreg)
            function contains(arr, elem) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] === elem) {
                        return true;
                    }
                }
                return false;
            }
            if (ipBan) {
                return next(ApiError.badRequest('Вы забанены'))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            //const idGet = await User.max('id')
            //const id = idGet + 1
            const user = await User.create({email, password: hashPassword,  role})

            await Userdata.create({username, rating, twitch, facebook, youtube, instagram, telegram, vk, ok, userId: user.id, promo, ipreg, ipin: ipreg})

            await db.query('INSERT INTO donates (amount, username, "billId", comment, "createdAt", "updatedAt", nametype, typeid, "brandName", brandid, code_transaction, status)' +
                'VALUES ($1,$2,$3,$4,Now(),Now(),$5,$6,$7,$8,$9,$10)',
                [150, username, 150150150150150, 'registration bonus +150руб.', username, null, '', null, 3, true])

            const data = await db.query('SELECT * FROM userdata WHERE "userId" = $1', [user.id])
            const userdataid = data.rows[0].id
            const token = generateJwt(user.id, user.email, user.role, userdataid)
            return res.json({
                token
            })
        }catch (e){
            return next(ApiError.internal(e.message))
        }

    }

    async login(req, res, next) {
        try{
            const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
            const {email, password} = req.body
            const user = await User.findOne({where: {email}})
            if (!user) {
                return next(ApiError.internal('Пользователь не найден'))
            }
            let comparePassword = bcrypt.compareSync(password, user.password)
            //let comparePassword = User.findOne({where: {password}})
            if (!comparePassword) {
                return next(ApiError.internal('Указан неверный пароль'))
            }

            const data = await db.query('SELECT * FROM userdata WHERE "userId" = $1', [user.id])
            if(data.rows[0].ban === true){
                return next(ApiError.internal('Вы забанены'))
            }

            const userdataid = data.rows[0].id
            const ipData = await db.query('SELECT ip FROM userdata WHERE id = $1', [userdataid])
            const ipinData = await db.query('SELECT ipin FROM userdata WHERE id = $1', [userdataid])

            let arr = ipinData.rows[0].ipin.split(';')
            var ipСompare = contains(arr, ip)
            function contains(arr, elem) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] === elem) {
                        return true;
                    }
                }
                return false;
            }

            if(ip !== ipData.rows[0].ip && ipСompare === false){
                const ipinDataAll = ipinData.rows[0].ipin.concat(';'+ ip)
                await db.query('UPDATE userdata SET ipin = $1 WHERE id = $2', [ipinDataAll, userdataid])
            }

            await db.query('UPDATE userdata SET ip = $1 WHERE id = $2', [ip, userdataid])
            const token = generateJwt(user.id, user.email, user.role, userdataid)
            return res.json({token})
        }catch (e){
            return next(ApiError.internal(e.message))
        }
    }

    async check(req, res, next) {
        try{
            const data = await db.query('SELECT * FROM userdata WHERE "userId" = $1', [req.user.id])
            const userdataid = data.rows[0].id
            const token = generateJwt(req.user.id, req.user.email, req.user.role, userdataid)
            return res.json({
                token,
                user: {
                    id: req.user.id,
                    email: req.user.email,
                    role: req.user.role,
                    userdataid : userdataid
                }
            })
        }catch (e){
            return next(ApiError.internal(e.message))
        }
    }

    async userData(req, res) {
        const id = req.user.id
        const userData = await db.query('SELECT * FROM userdata WHERE "userId" = $1', [id])
        return res.json(userData.rows[0])
    }
    //------------------or------------------
    // async userData(req, res, next) {
    //     try{
    //         const userdata = await Userdata.findOne({where: {userId: req.user.id}})
    //         return res.json(userdata)
    //     }catch (e){
    //         return next(ApiError.internal('Error'))
    //     }
    // }

    async getPromo(req, res, next) {
        try{
            const id = req.params.id
            const username = await db.query('SELECT username FROM userdata WHERE userdata.id = $1', [id])

            const promo = await db.query('SELECT COUNT(promo) FROM userdata WHERE promo = $1', [username.rows[0].username])
            return res.json(promo.rows[0].count)
        }catch (e){
            return next(ApiError.internal(e.message))
        }
    }

    async getRating(req, res, next) {
        try{
            const nametype = req.params.nametype
            //const rating = await db.query('SELECT * FROM ratings WHERE rating_type = $1', [nametype])


            const ratingCount = await db.query('SELECT rating_username, SUM(rating_rate) FROM ratings WHERE rating_type = $1 GROUP BY rating_username ORDER BY SUM(rating_rate) DESC', [nametype])
            return res.json(ratingCount)
        }catch (e){
            return next(ApiError.internal(e.message))
        }
    }


    async getUsers(req, res, next) {
        try{
            var users = await db.query('SELECT * FROM userdata')
            // const types = await db.query('SELECT * FROM types WHERE types.start IS NULL')
            //
            // for(let h = 0; h < users.rows.length; h++) {
            //     const promo = await db.query('SELECT COUNT(promo) FROM userdata WHERE promo = $1', [users.rows[h].username])
            //     const userWin = []
            //     const userWinOpp = []
            //     for (let i = 0; i < types.rows.length; i++) {
            //         userWin.push(await db.query('SELECT * FROM"' + types.rows[i].nametype + "_win" + '"WHERE "userdataId" = $1', [users.rows[h].id]))
            //         userWinOpp.push(await db.query('SELECT * FROM"' + types.rows[i].nametype + '"WHERE ("userdatumId" = $1 OR "userdatumIdOpp" = $1) AND "userdatumId" != "userdatumIdOpp"', [users.rows[h].id]))
            //     }
            //     var countWin = 0
            //     var countLoss = 0
            //     for (let i = 0; i < userWinOpp.length; i++) {
            //         for (let a = 0; a < userWinOpp[i].rows.length; a++) {
            //             if (userWinOpp[i].rows[a].userCheck === false && users.rows[h].username === userWinOpp[i].rows[a].username) {
            //                 countWin += 1
            //             }
            //             if (userWinOpp[i].rows[a].oppCheck === false && users.rows[h].username === userWinOpp[i].rows[a].oppUsername) {
            //                 countWin += 1
            //             }
            //             if (userWinOpp[i].rows[a].userCheck === true && users.rows[h].username === userWinOpp[i].rows[a].username) {
            //                 countLoss += 1
            //             }
            //             if (userWinOpp[i].rows[a].oppCheck === true && users.rows[h].username === userWinOpp[i].rows[a].oppUsername) {
            //                 countLoss += 1
            //             }
            //         }
            //     }
            //     const donatesCyberbet = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND username = $1 AND code_transaction = 2 GROUP BY username ORDER BY sum(amount) DESC', [users.rows[h].username])
            //     var dCyberbet = 0
            //     if(donatesCyberbet.rows.length > 0){
            //         dCyberbet = donatesCyberbet.rows[0].sum
            //     }
            //     const donatesTypes  = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND username = $1 AND code_transaction = 1 GROUP BY username ORDER BY sum(amount) DESC', [users.rows[h].username])
            //     var dTypes = 0
            //     if(donatesTypes.rows.length > 0){
            //         dTypes = donatesTypes.rows[0].sum
            //     }
            //     const donatesUsers  = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND username = $1 AND code_transaction = 3 GROUP BY username ORDER BY sum(amount) DESC', [users.rows[h].username])
            //     var dUsers = 0
            //     if(donatesUsers.rows.length > 0){
            //         dUsers = donatesUsers.rows[0].sum
            //     }
            //     const paymentGame  = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND username = $1 AND code_transaction = 4 GROUP BY username ORDER BY sum(amount) DESC', [users.rows[h].username])
            //     var pGame = 0
            //     if(paymentGame.rows.length > 0){
            //         pGame = paymentGame.rows[0].sum
            //     }
            //     const fundGame  = await db.query('SELECT username, sum(amount) FROM donates WHERE status = true AND username = $1 AND code_transaction = 5 GROUP BY username ORDER BY sum(amount) DESC', [users.rows[h].username])
            //     var pFund = 0
            //     if(fundGame.rows.length > 0){
            //         pFund = fundGame.rows[0].sum
            //     }
            //
            //     users.rows[h].countWin = countWin
            //     users.rows[h].countLoss = countLoss
            //     users.rows[h].promo = promo.rows[0].count
            //     users.rows[h].dCyberbet = dCyberbet
            //     users.rows[h].dTypes = dTypes
            //     users.rows[h].dUsers = dUsers
            //     users.rows[h].pGame = pGame
            //     users.rows[h].pFund = pFund
            //}


            return res.json({users})

        }catch (e){
            return next(ApiError.internal(e.message + ' getUsers'))
        }
    }

    async users(req, res, next) {
        try{
            const users = await User.findAll()
            return res.json(users)
        }catch (e){
            return next(ApiError.internal(e.message))
        }
    }

    // async user(req, res) {
    //     const id = req.user.id
    //     const user = await db.query('SELECT email FROM users WHERE id = $1', [id])
    //     return res.json(user.rows[0].email)
    // }


}

module.exports = new UserController()
