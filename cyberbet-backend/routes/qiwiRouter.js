const Router = require('express')
const router = new Router()
const qiwiController = require('../controllers/qiwiController')
const checkEmail = require('../middleware/emailMiddleware')


router.get('/', qiwiController.qiwiLink)
router.get('/payment', qiwiController.qiwiLinkPayment)
//router.get('/:pay/:login/:description', qiwiController.qiwiLink)
router.get('/payusers', qiwiController.qiwiPayUsers)
router.post('/payfund',checkEmail.emailDatabase, qiwiController.qiwiLinkFund)


module.exports = router
