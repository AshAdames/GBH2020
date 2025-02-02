const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//MongoDB Connection
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB Database is CONNECTED");
})

const drivesRouter = require('./routes/drives');
const userRouter = require('./routes/users');

app.use('/users', userRouter);
app.use('/drives', drivesRouter);

app.listen(port, () => {
    console.log('Server is running on port: $', { port });
})