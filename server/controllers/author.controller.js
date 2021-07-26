const {Author} = require('../models/author.model');

module.exports.createAuthor = (req, res) => {
    console.log("AUTHOR CREATE CONTROLLER")
    console.log(req.body)
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json(err));
};

module.exports.getAllAuthors = (req, res) => {
    Author.find().sort({lastName: "asc"})
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json(err));
};

module.exports.getOneAuthor = (req, res) => {
    const {id} = req.params;
    Author.findOne({_id: id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json(err));
};

module.exports.updateAuthor = (req, res) => {
    const {id} = req.params;
    Author.findOneAndUpdate({_id: id}, req.body, {new: true, runValidators: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err));
};

module.exports.deleteAuthor = (req, res) => {
    const {id} = req.params;
    Author.deleteOne({_id: id})
        .then(confirmation => res.json(confirmation))
        .catch(err => res.json(err));
};
