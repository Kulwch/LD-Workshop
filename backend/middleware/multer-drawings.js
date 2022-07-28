/**
 * Multer-drawings - middleware
 * 
 * Package @multer is used to manage the drawings files: save, modify, delete in the images folder
 * 
 */

const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif'
};

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'drawings');
  },
  filename: (_req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('drawing');