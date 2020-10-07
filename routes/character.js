const { Router } = require('express')
const router = Router()
const characterController = require('../controller/characterController')
const { authentication, isAdmin } = require('../middlewares/auth')

router.get('/', authentication, isAdmin, characterController.getChar)
router.post('/', authentication, isAdmin, characterController.addChar)
router.get('/:id', authentication, isAdmin, characterController.findById)
router.put('/:id', authentication, isAdmin, characterController.updateChar)
router.delete('/:id', authentication, isAdmin, characterController.deleteChar)


module.exports = router
