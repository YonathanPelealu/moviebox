const { Router } = require('express')
const router = Router()
const userController = require('../controller/userController')

router.get('/all',userController.getAllUser)
router.get('/list/:id',userController.getById)

router.post('/register',userController.register)

module.exports = router
