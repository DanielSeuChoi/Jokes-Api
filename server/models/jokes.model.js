const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setUp: {
        type: String,
        required: [true, 'Please enter Joke'],
        minLength: [2, 'Joke must be at least 10 characters']
    },
    punchLine: {
        type: String,
        required: [true, 'Please enter punchline'],
        minLength: [2, 'Punchline must be at least 2 characters']
    }
},
    { timeStamps: true }
);


const Jokes = mongoose.model('Joke', JokeSchema);

module.exports = Jokes;