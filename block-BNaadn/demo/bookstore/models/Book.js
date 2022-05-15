var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema ( {
    title: { type: String, required: true },
    summary: { type: String, },
    pages: Number,
    publication: String,
    cover_image: String,
    category: [{ type: String}],
    author: { type: String },
    likes: { type: Number, default: 0 },
    
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);