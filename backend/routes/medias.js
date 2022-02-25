const express = require('express');
const router = express.Router();

//const auth = require('../middleware/auth');
//const adminAuth = require('../middleware/adminAuth');
const multerMedias = require('../middleware/multer-medias');

const mediaCtrl = require('../controllers/medias');

router.post('/', auth, multerMedias, MediaCtrl.createMedia);
router.put('/:id', auth, multerMedias, MediaCtrl.modifyMedia);
router.delete('/:id', auth, multerMedias, MediaCtrl.deleteMedia);
router.get('/:id', auth, MediaCtrl.getOneMedia);
router.get('/', auth, MediaCtrl.getAllMedias);

router.put('/admin/:id', adminAuth, multerMedias, MediaCtrl.modifyMedia);
router.delete('/admin/:id', adminAuth, multerMedias, MediaCtrl.adminDeleteMedia);

module.exports = router;