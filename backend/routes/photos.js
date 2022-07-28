const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');
const multerPhotos = require('../middleware/multer-photos');

const photoCtrl = require('../controllers/photos');

router.post('/', auth, multerPhotos, photoCtrl.createPhoto);
router.put('/:id', auth, multerPhotos, photoCtrl.modifyPhoto);
router.delete('/:id', auth, multerPhotos, photoCtrl.deletePhoto);
router.get('/:id', auth, photoCtrl.getOnePhoto);
router.get('/', auth, photoCtrl.getAllPhotos);

router.put('/admin/:id', adminAuth, multerPhotos, photoCtrl.modifyPhoto);
router.delete('/admin/:id', adminAuth, multerPhotos, photoCtrl.adminDeletePhoto);

module.exports = router;