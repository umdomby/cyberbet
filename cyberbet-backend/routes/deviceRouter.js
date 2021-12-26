const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')
const checkEmail = require('../middleware/emailMiddleware')
const func = require('../startChamp/funcTest')
const checkRole = require('../middleware/checkRoleMiddleware')
const champTable = require('../controllers/champTable')
const champLap = require('../controllers/champLap')
const champLapOne = require('../controllers/champLapOne')
const champWin = require('../controllers/champWin')

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
//router.get('/soc/datauser', deviceController.socDataUser)
//router.get('/start', deviceController.getAllStart)
router.get('/indextype', deviceController.indexSelectTypeNow)

router.post('/setdatatimegame', checkEmail.emailDatabase, deviceController.setDataTimeGame)
router.post('/setdatarating', checkEmail.emailDatabase, deviceController.setDataRating)
router.post('/setdatatwitch', checkEmail.emailDatabase, deviceController.setDataTwitch)
router.post('/setdatayoutube', checkEmail.emailDatabase, deviceController.setDataYoutube)
router.post('/setdatafacebook', checkEmail.emailDatabase, deviceController.setDataFacebook)
router.post('/setdatainstagram', checkEmail.emailDatabase, deviceController.setDataInstagram)
router.post('/setdatatelegram', checkEmail.emailDatabase, deviceController.setDataTelegram)
router.post('/setdatavk', checkEmail.emailDatabase, deviceController.setDataVK)
router.post('/setdataok', checkEmail.emailDatabase, deviceController.setDataOK)

router.post('/setdataimg', checkEmail.emailDatabase, deviceController.createImg)
router.get('/img/photo/:id', deviceController.imgPhotoGet)

router.get('/paygamedevice/:typeid', deviceController.payGameDeviceAll)



router.post('/champtable', checkRole('ADMIN'), champTable.createTableRandom)
router.post('/champlap', checkRole('ADMIN'), champLap.dateChampLapGo)
router.post('/champlap/one', checkRole('ADMIN'), champLapOne.dateChampLapGoOne)
router.post('/champwin', checkRole('ADMIN'), champWin.dateChampWin)



router.get('/:id', deviceController.getOne)


module.exports = router
