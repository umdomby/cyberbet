const Router = require('express')
const router = new Router()
const oneOnOneController = require('../controllers/oneOnOneController')


router.post('/', oneOnOneController.create)
// router.get('/', oneOnOneController.getAll)
// router.get('/:id' , oneOnOneController.getTypeId)

module.exports = router
