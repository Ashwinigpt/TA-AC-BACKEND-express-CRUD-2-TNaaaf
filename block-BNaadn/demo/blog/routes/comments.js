var express = require('express');
var router = express.Router();

var Comment = require('../models/comment')

// edit the comment
router.get('/:id/edit', (req, res, next) => {
    var id = req.params.id;
    Comment.findById(id, (err, comment) => {
        if (err) return next(err);
        res.render('updateComment', { comment })
    })
});

// update the comment
router.post('/:id', (req, res, next) => {
    var id = req.params.id;
    Comment.findByIdAndUpdate(id, req.body, (err, updatedComment) => {
        if (err) return next(err);
        res.redirect('/articles/' + updatedComment.articleId)
    })
});

// delete the comment
router.get('/:id/delete', (req, res, next) => {
    var commentId = req.params.id;
    Comment.findByIdAndRemove(commentId, (err, comment) => {
        if (err) return next(err);
        res.redirect('/articles/' + comment.articleId)
    })
})  

module.exports = router;