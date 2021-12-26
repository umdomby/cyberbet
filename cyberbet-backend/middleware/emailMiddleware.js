const db = require('../dbPool')
const jwt = require('jsonwebtoken')


class emailMiddleware{

    async emailDatabase(req, res, next){
        const {id} = req.body
        const email = await db.query('SELECT email FROM users WHERE id = $1',[id])
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            if (!token) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.email !== email.rows[0].email) {
                console.log(email)
                return res.status(403).json({message: "Нет доступа"})
            }
            req.user = decoded;
            next()
        } catch (e) {
            res.status(401).json({message: "Не авторизован!!!"})
        }
    }

}

module.exports = new emailMiddleware()



