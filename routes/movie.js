const { Router } = require('express')
const router = Router()
const movieController = require('../controller/movieController')

router.get('/', movieController.getMovie)
router.get('/add', movieController.addMovieForm)
router.post('/add', movieController.addMovie)
router.get('/:id', movieController.deleteMovie)
router.put('/update', movieController.UpdateMovie)
router.post('/update/:id', movieController.UpdateMovieForm)

module.exports = router

