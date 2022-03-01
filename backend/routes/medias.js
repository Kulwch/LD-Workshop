const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');
const multerMedias = require('../middleware/multer-medias');

const mediaCtrl = require('../controllers/medias');

router.post('/', auth, multerMedias, mediaCtrl.createMedia);
router.put('/:id', auth, multerMedias, mediaCtrl.modifyMedia);
router.delete('/:id', auth, multerMedias, mediaCtrl.deleteMedia);
router.get('/:id', auth, mediaCtrl.getOneMedia);
router.get('/', auth, mediaCtrl.getAllMedias);

router.put('/admin/:id', adminAuth, multerMedias, mediaCtrl.modifyMedia);
router.delete('/admin/:id', adminAuth, multerMedias, mediaCtrl.adminDeleteMedia);

module.exports = router;