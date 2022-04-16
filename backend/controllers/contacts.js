const db = require('../models/index');
const getUserId = require("../utils/getUserId");

exports.postContact = (req, res, next) => {    
    db.Contact.create({
        text: req.body.text,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    })
    .then(() => res.status(201).json({ message: 'Message de contact envoyé !'}))
    .catch(error => res.status(400).json({ error }))   
};

