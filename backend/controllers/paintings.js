const db = require('../models/index');
const getUserId = require("../utils/getUserId");
const fs = require('fs');

exports.getAllPaintings = (req, res, _next) => {
    db.Painting.findAll()
        .then((paintings) => res.status(200).json({paintings}))
        .catch(error => res.status(400).json({ error })
        )
};


exports.getOnePainting = (req, res, _next) => {
    db.Painting.findOne({ where: { id: req.params.id } })
        .then((painting) => res.status(200).json({painting}))
        .catch((error) => res.status(404).json({ error })
        )
};

exports.createPainting = (req, res, _next) => {
    db.Painting.create({
        userId: getUserId(req),
        title: req.body.title,
        text: req.body.text,
        paintingUrl: `${req.protocol}://${req.get('host')}/../paintings/${req.file.filename}`,
    })
        .then(() => res.status(201).json({ message: 'Peinture publié !' }))
        .catch((error) => res.status(400).json({ error }))
};

exports.modifyPainting = (req, res, _next) => {
    db.Painting.findOne({ where: { id: req.params.id } })
        .then(painting => {
            if (painting.userId !== getUserId(req)) {
                return res.status(401).json({ message: 'Requête non autorisée !' })
            }
            const paintingObject = req.file ?
                {
                    ...req.body.painting,
                    paintingUrl: `${req.protocol}://${req.get('host')}/paintings/${req.file.filename}`
                } : { ...req.body };
            db.Painting.update({ ...paintingObject }, { where: { id: req.params.id } })
                .then(() => res.status(200).json({ message: 'Peinture modifiée !' }))
                .catch(error => res.status(400).json({ error }))
        });
};

exports.deletePainting = (req, res, _next) => {
    db.Painting.findOne({ where: { id: req.params.id } })
        .then(painting => {
            if (painting.userId !== getUserId(req)) {
                return res.status(401).json({ message: 'Requête non autorisée !' })
            }
            const filename = painting.imageUrl.split('/paintings/')[1];
            fs.unlink(`paintings/${filename}`, () => {
                painting.destroy({ where: { id: req.params.id } })
                    .then(() => res.status(200).json({ message: 'Peinture supprimée !' }))
                    .catch(error => res.status(400).json({ error }))
            })
        });
};

exports.adminDeletePainting = (req, res, _next) => {
    db.Painting.findOne({ where: { id: req.params.id } })
        .then(painting => {
            const filename = painting.imageUrl.split('/paintings/')[1];
            fs.unlink(`paintings/${filename}`, () => {
                painting.destroy({ where: { id: req.params.id } })
                    .then(() => res.status(200).json({ message: 'Peinture supprimée !' }))
                    .catch(_error => res.status(403).json({ message: 'requête réservée aux admins' }))
            })
        });
};