const express = require('express');
const cors = require('cors');
const path = require('path');
const usersRoutes = require('./routes/users');
const mediasRoutes = require('./routes/medias');
const drawingsRoutes = require('./routes/drawings');
const photosRoutes = require('./routes/photos');
const paintingsRoutes = require('./routes/paintings');
const commentsRoutes = require('./routes/comments');

const helmet = require('helmet');

const app = express();

app.use(helmet());

app.use(cors());

let corsOptions = {
    origin: [ 'http://localhost:3001', 'http://localhost:3000' ]
};

app.use((_req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader('Cross-Origin-Resource-Policy', 'same-site');
  next();
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/medias', express.static(path.join(__dirname, 'medias')));
app.use('/photos', express.static(path.join(__dirname, 'photos')));
app.use('/drawings', express.static(path.join(__dirname, 'drawings')));
app.use('/paintings', express.static(path.join(__dirname, 'paintings')));

app.use('/api/users', usersRoutes);
app.use('/api/medias', mediasRoutes);
app.use('/api/photos', photosRoutes);
app.use('/api/drawings', drawingsRoutes);
app.use('/api/paintings', paintingsRoutes);
app.use('/api/comments', commentsRoutes);

module.exports = app;