var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema ( {
    content: { type: String, required: true },
    articleId: { type: Schema.Types.ObjectId, ref: "Article", required: true },
    likes: { type: String, default: 0 },
    author: String

}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);