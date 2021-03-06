const db = require('../models/index');
const getUserId = require("../utils/getUserId");

exports.postComment = (_req, res, _next) => {    
    db.Comment.create({
        text: req.body.text,
        authorFirstName: req.body.authorFirstName,
        authorLastName: req.body.authorLastName,
        authorEmail: req.body.authorEmail
    })
    .then(() => res.status(201).json({ message: 'commentaire publié !'}))
    .catch(error => res.status(400).json({ error }))   
};

exports.deleteComment = (_req, res, _next) => {   
    db.Comment.findOne({where: { id: req.params.id}})
        .then(comment => {
            if(comment.userId !== getUserId(req)){
                return res.status(401).json({message: 'Requête non autorisée !'})
            }
    comment.destroy()
            .then(() => res.status(200).json({ message: 'commentaire effacé !'}))
            .catch(error => res.status(400).json({error}))
    });
};

exports.getAllComments = (_req, res, _next) => {
    db.Comment.findAll()
        .then((comments) => res.status(200).json(comments))
        .catch(error => res.status(400).json({error}))
};

exports.adminDeleteComment = (_req, res, _next) => { 
    db.Comment.destroy({where: { id: req.params.id }})
            .then(() => res.status(200).json({ message: 'commentaire effacé !'}))
            .catch(error => res.status(400).json({error}))
    .catch(_error => res.status(403).json({ message: 'requête réservée aux admins'}))
};