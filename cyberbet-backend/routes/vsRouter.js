const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/vsController')
const vsController = require('../controllers/vsController')
const checkEmail = require('../middleware/emailMiddleware')


router.get('/:type/:id', vsController.getOneVS)
router.post('/imgvsuser', checkEmail.emailDatabase, vsController.createImgVsUser)
router.post('/linkvs', checkEmail.emailDatabase, deviceController.linkVs)
router.get('/userswin', vsController.getUsersWin)


router.post('/usercheck', checkEmail.emailDatabase, vsController.userCheck)
router.post('/oppcheck', checkEmail.emailDatabase, vsController.oppCheck)
router.post('/user-check-twitch', checkEmail.emailDatabase, vsController.checkUserTwitch)
router.post('/opp-check-twitch', checkEmail.emailDatabase, vsController.checkOppTwitch)



module.exports = router


