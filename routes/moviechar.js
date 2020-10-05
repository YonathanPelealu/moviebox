const { Router } = require('express')
const router = Router()
const moviecharController = require('../controller/moviecharController')
const { authentication, isAdmin } = require('../middlewares/auth')

router.get('/', authentication, isAdmin, moviecharController.getMovieChar)
router.post('/', authentication, isAdmin, moviecharController.addMovieChar)
router.get('/:id', authentication, isAdmin, moviecharController.findById)
router.put('/:id', authentication, isAdmin, moviecharController.updateMovieChar)
router.delete('/:id', authentication, isAdmin, moviecharController.deleteMovieChar)


module.exports = router
