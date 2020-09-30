const { Router } = require('express')
const router = Router()
const movieController = require('../controller/movieController')

router.get('/:id', movieController.deleteMovie)
router.put('/update', movieController.UpdateMovie)
router.post('/update/:id', movieController.UpdateMovieForm)

module.exports = router

