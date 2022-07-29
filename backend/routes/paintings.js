const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');
const multerPaintings = require('../middleware/multer-paintings');

const paintingCtrl = require('../controllers/paintings');

router.post('/', auth, multerPaintings, paintingCtrl.createPainting);
router.put('/:id', auth, multerPaintings, paintingCtrl.modifyPainting);
router.delete('/:id', auth, multerPaintings, paintingCtrl.deletePainting);
router.get('/:id', auth, paintingCtrl.getOnePainting);
router.get('/', auth, paintingCtrl.getAllPaintings);

router.put('/admin/:id', adminAuth, multerPaintings, paintingCtrl.modifyPainting);
router.delete('/admin/:id', adminAuth, multerPaintings, paintingCtrl.adminDeletePainting);

module.exports = router;