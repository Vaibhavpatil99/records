const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    city: String,
});

module.exports = mongoose.model('Posts',PostSchema);