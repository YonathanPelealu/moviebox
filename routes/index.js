const { Router } = require('express')
const router = Router()
const movieRoutes = require('./movie')
const userRoutes = require('./user')
const characterRoutes = require('./character')
const moviecharRoutes = require('./moviechar')

const movieController = require('../controller/movieController')
const userController = require('../controller/userController')

router.get('/', movieController.getMovie)
router.post('/register',userController.addUsers)
router.post('/login',userController.login)

router.use('/movie',movieRoutes)
router.use('/user',userRoutes)
router.use('/character',characterRoutes)
router.use('/moviechar',moviecharRoutes)

module.exports = router