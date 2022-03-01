const db = require('../models/index');
const getUserId = require("../utils/getUserId");
const fs = require('fs');

exports.getAllMedias = (req, res, next) => {
    db.Media.findAll()
        .then((medias) => res.status(200).json({medias}))
        .catch(error => res.status(400).json({ error })
        )
};


exports.getOneMedia = (req, res, next) => {
    db.Media.findOne({ where: { id: req.params.id } })
        .then((media) => res.status(200).json({media}))
        .catch((error) => res.status(404).json({ error })
        )
};

exports.createMedia = (req, res, next) => {
    db.Media.create({
        userId: getUserId(req),
        statusText: req.body.statusText,
        imageUrl: `${req.protocol}://${req.get('host')}/../medias/${req.file.filename}`,
    })
        .then(() => res.status(201).json({ message: 'media publié !' }))
        .catch((error) => res.status(400).json({ error }))
};

exports.modifyMedia = (req, res, next) => {
    db.Media.findOne({ where: { id: req.params.id } })
        .then(media => {
            if (media.userId !== getUserId(req)) {
                return res.status(401).json({ message: 'Requête non autorisée !' })
            };
            const mediaObject = req.file ?
                {
                    ...req.body.media,
                    imageUrl: `${req.protocol}://${req.get('host')}/medias/${req.file.filename}`
                } : { ...req.body };
            db.Media.update({ ...mediaObject }, { where: { id: req.params.id } })
                .then(() => res.status(200).json({ message: 'Media modifié !' }))
                .catch(error => res.status(400).json({ error }))
        });
};

exports.deleteMedia = (req, res, next) => {
    db.Media.findOne({ where: { id: req.params.id } })
        .then(media => {
            if (media.userId !== getUserId(req)) {
                return res.status(401).json({ message: 'Requête non autorisée !' })
            };
            const filename = media.imageUrl.split('/medias/')[1];
            fs.unlink(`medias/${filename}`, () => {
                media.destroy({ where: { id: req.params.id } })
                    .then(() => res.status(200).json({ message: 'Media supprimé !' }))
                    .catch(error => res.status(400).json({ error }))
            })
        });
};

exports.adminDeleteMedia = (req, res, next) => {
    db.Media.findOne({ where: { id: req.params.id } })
        .then(media => {
            const filename = media.imageUrl.split('/medias/')[1];
            fs.unlink(`medias/${filename}`, () => {
                media.destroy({ where: { id: req.params.id } })
                    .then(() => res.status(200).json({ message: 'Media supprimé !' }))
                    .catch(error => res.status(403).json({ message: 'requête réservée aux admins' }))
            })
        });
};