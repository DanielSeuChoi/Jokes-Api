const Jokes = require('../models/jokes.model');



const create = (req, res) => {
    Jokes.create(req.body)
        .then(joke => res.status(201).json(joke))
        .catch(err => res.status(400).json(err));
};

const findAll = (req, res) => {
    Jokes.find()
        .then(joke => res.status(201).json(joke))
        .catch(err => res.status(500).json(err));
};

const findOne = (req, res) => {
    const { id } = req.params;
    Jokes.findById(id)
        .then(joke => res.status(201).json(joke))
        .catch(err => res.status(500).json(err));
};

const updateOne = (req, res) => {
    const { id } = req.params;
    Jokes.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        .then(joke => res.status(201).json(joke))
        .catch(err => res.status(400).json(err))
};

const deleteOne = (req, res) => {
    const { id } = req.params;
    Jokes.findByIdAndDelete(id)
        .then(joke => res.status(201).json(joke))
        .catch(err => res.status(400).json(err))
}

module.exports = { create, findAll, findOne, updateOne, deleteOne }