const express = require("express")
const app = express();

const dotenv = require("dotenv")
dotenv.config();

const connectDb = require("./config/mongoose.config")
connectDb();

app.use(express.json())

const jokeRouter = require('./routes/jokes.route')
app.use('/api/jokes', jokeRouter);

const PORT = process.env.PORT;
app.listen(PORT, () =>
    console.log(`Listening on port : ${PORT}`));