const db = require('../models/index');
const getUserId = require("../utils/getUserId");
const fs = require('fs');

exports.getAllDrawings = (req, res, _next) => {
    db.Drawing.findAll()
        .then((drawings) => res.status(200).json({drawings}))
        .catch(error => res.status(400).json({ error })
        )
};


exports.getOneDrawing = (req, res, _next) => {
    db.Drawing.findOne({ where: { id: req.params.id } })
        .then((drawing) => res.status(200).json({drawing}))
        .catch((error) => res.status(404).json({ error })
        )
};

exports.createDrawing = (req, res, _next) => {
    db.Drawing.create({
        userId: getUserId(req),
        title: req.body.title,
        text: req.body.text,
        drawingUrl: `${req.protocol}://${req.get('host')}/../drawings/${req.file.filename}`,
    })
        .then(() => res.status(201).json({ message: 'dessin publié !' }))
        .catch((error) => res.status(400).json({ error }))
};

exports.modifyDrawing = (req, res, _next) => {
    db.Drawing.findOne({ where: { id: req.params.id } })
        .then(drawing => {
            if (drawing.userId !== getUserId(req)) {
                return res.status(401).json({ message: 'Requête non autorisée !' })
            }
            const drawingObject = req.file ?
                {
                    ...req.body.drawing,
                    imageUrl: `${req.protocol}://${req.get('host')}/drawings/${req.file.filename}`
                } : { ...req.body };
            db.Drawing.update({ ...drawingObject }, { where: { id: req.params.id } })
                .then(() => res.status(200).json({ message: 'Dessin modifié !' }))
                .catch(error => res.status(400).json({ error }))
        });
};

exports.deleteDrawing = (req, res, _next) => {
    db.Drawing.findOne({ where: { id: req.params.id } })
        .then(drawing => {
            if (drawing.userId !== getUserId(req)) {
                return res.status(401).json({ message: 'Requête non autorisée !' })
            }
            const filename = drawing.imageUrl.split('/drawings/')[1];
            fs.unlink(`drawings/${filename}`, () => {
                drawing.destroy({ where: { id: req.params.id } })
                    .then(() => res.status(200).json({ message: 'Dessin supprimé !' }))
                    .catch(error => res.status(400).json({ error }))
            })
        });
};

exports.adminDeleteDrawing = (req, res, _next) => {
    db.Drawing.findOne({ where: { id: req.params.id } })
        .then(drawing => {
            const filename = drawing.imageUrl.split('/drawings/')[1];
            fs.unlink(`drawings/${filename}`, () => {
                drawing.destroy({ where: { id: req.params.id } })
                    .then(() => res.status(200).json({ message: 'Dessin supprimé !' }))
                    .catch(_error => res.status(403).json({ message: 'requête réservée aux admins' }))
            })
        });
};