const { Router } = require('express')
const router = Router()
const userController = require('../controller/userController')

router.get('/all',userController.getAllUser)
router.get('/list/:id',userController.getById)
router.get('/add',userController.registerForm)

router.post('/add',userController.addUsers)


module.exports = router
