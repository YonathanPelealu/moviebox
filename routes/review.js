const { Router } = require('express')
const router = Router()

const ReviewRoutes = require ('../controller/reviewController')

router.post('/add',ReviewRoutes.addReview)
router.get('/',ReviewRoutes.getAllReview)
router.get('/user/:id',ReviewRoutes.getAllByUserId)
router.get('/movie/:id',ReviewRoutes.getAllByMovieId)
router.put('/:id',ReviewRoutes.updateReview)
router.delete('/movie/:id',ReviewRoutes.deleteReview)

module.exports = router