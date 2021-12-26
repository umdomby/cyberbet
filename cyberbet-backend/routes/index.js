const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const vsRouter = require('./vsRouter')
const qiwiRouter = require('./qiwiRouter')
const webSocketController = require('./wsRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/vs', vsRouter)
router.use('/qiwi', qiwiRouter)
router.use('/ws', webSocketController)


module.exports = router
