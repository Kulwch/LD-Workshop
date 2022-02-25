const express = require('express');
const path = require('path');
const usersRoutes = require('./routes/users');
const mediasRoutes = require('./routes/medias');


const helmet = require('helmet');

const app = express();

app.use(helmet());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/medias', express.static(path.join(__dirname, 'medias')));

app.use('/api/users', usersRoutes);
app.use('/api/medias', mediasRoutes);
app.use('/api/comments', commentsRoutes);

module.exports = app;