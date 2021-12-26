const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/userdata/users', userController.getUsers)
router.get('/auth', authMiddleware, userController.check)
router.get('/userdata/:id', authMiddleware, userController.userData)

router.get('/userdata/promo/:id', userController.getPromo)
router.get('/userdata/rating/:nametype', userController.getRating)


module.exports = router
