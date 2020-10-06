const { Router } = require('express')
const router = Router()
const movieRoutes = require('./movie')
const userRoutes = require('./user')
const characterRoutes = require('./character')
const moviecharRoutes = require('./moviechar')
const { upload } = require('../middlewares/multer')

const movieController = require('../controller/movieController')
const userController = require('../controller/userController')

router.get('/', movieController.getMovie)
router.post('/register',upload.single('image'), userController.register)
router.post('/login',userController.login)

router.use('/movie',movieRoutes)
router.use('/user',userRoutes)
router.use('/character',characterRoutes)
router.use('/moviechar',moviecharRoutes)

module.exports = router