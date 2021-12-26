const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)
//router.get('/champ/start', typeController.getChampStart)
//router.get('/start', typeController.getTypeStart)
router.get('/:id' , typeController.getTypeId)
router.get('/brand/idname/:typeid', typeController.getBrandIdname)
module.exports = router
