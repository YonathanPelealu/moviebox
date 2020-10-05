const { Router } = require('express')
const router = Router()
const characterController = require('../controller/characterController')
const { authentication, isAdmin } = require('../middlewares/auth')
const { uploadCast } = require('../middlewares/multer');

router.get('/', authentication, isAdmin, characterController.getChar)
router.post('/', authentication, isAdmin, uploadCast.single('image'), characterController.addChar)
router.get('/:id', authentication, isAdmin, characterController.findById)
router.put('/:id', authentication, isAdmin, uploadCast.single('image'), characterController.updateChar)
router.delete('/:id', authentication, isAdmin, characterController.deleteChar)


module.exports = router
