const { Router } = require('express')
const router = Router()
const movieRoutes = require('./movie')
const userRoutes = require('./user')

router.get('/', (req,res)=>{
    res.status(200).json({
        messege : 'Home Page'
    })
})

router.use('/movie',movieRoutes)
router.use('/user',userRoutes)

module.exports = router