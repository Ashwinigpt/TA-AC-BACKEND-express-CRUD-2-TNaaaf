var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = new Schema ( {
    name: { type: String, required: true },
    email: String,
    country: String,
    bookId: { type: Schema.Types.ObjectId, ref: "Book"},

}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema);