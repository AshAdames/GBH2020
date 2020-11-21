const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driveSchema = new Schema({
    type: String,
    drivename: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
   /* username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },*/

    description: {
        type: String,
        required: true
    },

    contact: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    }
    //date
});

const Drive = mongoose.model("Drive", driveSchema);

module.exports = Drive;