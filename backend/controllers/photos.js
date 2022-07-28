const db = require('../models/index');
const getUserId = require("../utils/getUserId");
const fs = require('fs');

exports.getAllPhotos = (req, res, _next) => {
    db.Photo.findAll()
        .then((photos) => res.status(200).json({photos}))
        .catch(error => res.status(400).json({ error })
        )
};


exports.getOnePhoto = (req, res, _next) => {
    db.Photo.findOne({ where: { id: req.params.id } })
        .then((photo) => res.status(200).json({photo}))
        .catch((error) => res.status(404).json({ error })
        )
};

exports.createPhoto = (req, res, _next) => {
    db.Photo.create({
        userId: getUserId(req),
        title: req.body.title,
        text: req.body.text,
        photoUrl: `${req.protocol}://${req.get('host')}/../photos/${req.file.filename}`,
    })
        .then(() => res.status(201).json({ message: 'Photo publiée !' }))
        .catch((error) => res.status(400).json({ error }))
};

exports.modifyPhoto = (req, res, _next) => {
    db.Photo.findOne({ where: { id: req.params.id } })
        .then(photo => {
            if (photo.userId !== getUserId(req)) {
                return res.status(401).json({ message: 'Requête non autorisée !' })
            }
            const photoObject = req.file ?
                {
                    ...req.body.photo,
                    photoUrl: `${req.protocol}://${req.get('host')}/photos/${req.file.filename}`
                } : { ...req.body };
            db.Photo.update({ ...photoObject }, { where: { id: req.params.id } })
                .then(() => res.status(200).json({ message: 'Photo modifiée !' }))
                .catch(error => res.status(400).json({ error }))
        });
};

exports.deletePhoto = (req, res, _next) => {
    db.Photo.findOne({ where: { id: req.params.id } })
        .then(photo => {
            if (photo.userId !== getUserId(req)) {
                return res.status(401).json({ message: 'Requête non autorisée !' })
            }
            const filename = photo.imageUrl.split('/photos/')[1];
            fs.unlink(`photos/${filename}`, () => {
                photo.destroy({ where: { id: req.params.id } })
                    .then(() => res.status(200).json({ message: 'Photo supprimé !' }))
                    .catch(error => res.status(400).json({ error }))
            })
        });
};

exports.adminDeletePhoto = (req, res, _next) => {
    db.Photo.findOne({ where: { id: req.params.id } })
        .then(photo => {
            const filename = photo.imageUrl.split('/photos/')[1];
            fs.unlink(`photos/${filename}`, () => {
                photo.destroy({ where: { id: req.params.id } })
                    .then(() => res.status(200).json({ message: 'Photo supprimé !' }))
                    .catch(_error => res.status(403).json({ message: 'requête réservée aux admins' }))
            })
        });
};