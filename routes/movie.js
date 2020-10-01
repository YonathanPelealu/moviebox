const { Router } = require('express')
const router = Router()
const movieController = require('../controller/movieController')

router.get('/', movieController.getMovie)
router.post('/add', movieController.addMovie)
router.get('/:id', movieController.deleteMovie)
router.put('/update', movieController.UpdateMovie)

module.exports = router

