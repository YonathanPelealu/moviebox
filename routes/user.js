const { Router } = require('express')
const router = Router()
const userController = require('../controller/userController')
const { authentication, isAdmin } = require('../middlewares/auth')

router.get('/', authentication, isAdmin, userController.getAllUser)
router.get('/update', authentication, userController.getById)
router.put('/update',authentication, userController.editUsers)
router.delete('/',authentication, userController.deleteUsers)


module.exports = router
