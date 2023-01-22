
const express = require("express");
const jokeRouter = express.Router();

const {
    create,
    findAll,
    findOne,
    updateOne,
    deleteOne,

} = require("../controllers/jokes.controller");
const Jokes = require("../models/jokes.model");

jokeRouter
    .route('/')
    .get(findAll)
    .post(create)

jokeRouter
    .route('/:id')
    .get(findOne)
    .put(updateOne)
    .delete(deleteOne)

module.exports = jokeRouter;