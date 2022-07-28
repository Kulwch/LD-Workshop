const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');
const multerDrawings = require('../middleware/multer-drawings');

const drawingCtrl = require('../controllers/drawings');

router.post('/', auth, multerDrawings, drawingCtrl.createDrawing);
router.put('/:id', auth, multerDrawings, drawingCtrl.modifyDrawing);
router.delete('/:id', auth, multerDrawings, drawingCtrl.deleteDrawing);
router.get('/:id', auth, drawingCtrl.getOneDrawing);
router.get('/', auth, drawingCtrl.getAllDrawings);

router.put('/admin/:id', adminAuth, multerDrawings, drawingCtrl.modifyDrawing);
router.delete('/admin/:id', adminAuth, multerDrawings, drawingCtrl.adminDeleteDrawing);

module.exports = router;