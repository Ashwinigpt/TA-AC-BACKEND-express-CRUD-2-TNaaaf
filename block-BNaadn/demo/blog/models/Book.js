var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema ( {
    title: { type: String, required: true },
    summary: { type: String, required: true },
    pages: Number,
    publication: String,
    cover_image: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);