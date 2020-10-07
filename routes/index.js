const { Router } = require('express');
const router = Router();
const userRoutes = require('./user')
const movieRoutes = require('./movie');
const characterRoutes = require('./character');
const reviewRoutes = require('./review');
const { upload } = require('../middlewares/multer')


const movieController = require('../controller/movieController')
const userController = require('../controller/userController')

router.get('/:page', movieController.getMovie)

router.post('/register',upload.single('image'), userController.register)
router.post('/login',userController.login)

router.post('/search',movieController.search)

router.use('/user', userRoutes)
router.use('/movie', movieRoutes)
router.use('/character', characterRoutes)
router.use('/review',reviewRoutes)

module.exports = router;