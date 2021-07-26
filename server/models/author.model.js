const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Author first name is required"],
        minLength: [3, "Author first name must be at least 3 characters"]
    },
    lastName: {
        type: String,
        required: [true, "Author last name is required"],
        minLength: [3, "Author last name must be at least 3 characters"]
    },

}, {timestamps: true});

module.exports.Author = mongoose.model("Author", AuthorSchema);