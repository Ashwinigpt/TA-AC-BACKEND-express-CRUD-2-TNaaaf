var express = require('express');
var router = express.Router();
var Book = require('../models/Book');


// create book form
router.get('/new', (req, res, next) => {
    res.render('addBook');
});

// create book
router.post('/new', (req, res, next) => {
    Book.create(req.body, (err, book) => {
        if(err) return next(err);
        res.redirect('/book')
    })
});

// list book
router.get('/', (req, res, next) => {
    Book.find({}, (err, book) => {
        if(err) return next(err);
        res.render('book', { book })
    })
});

// fetch single book
router.get('/:id', (req, res, next) => {
    var id = req.params.id;
    Book.findById(id, (err, book) => {
        if(err) return next(err);
        res.render('bookDetails', { book })
    })
});

// edit book form
router.get('/:id/edit', (req, res, next) => {
    var id = req.params.id;
    Book.findById(id, (err, book) => {
        if (err) return next (err);
        res.render('editBookForm', { book })
    });
});

// update book 
router.post('/:id', (req, res, next) => {
    var id = req.params.id;
    Book.findByIdAndUpdate(id, req.body, (err, updatedBook) => {
        if (err) return next (err);
        res.redirect('/book/')
    });
});

// delete book
router.get('/:id/delete', (req, res, next) => {
    var id = req.params.id;
    Book.findByIdAndDelete(id, (err, deletedBook) => {
        if (err) return next (err);
        res.redirect('/book/')
    });
});

// increament likes
router.get('/:id/likes', (req, res, next) => {
    var id = req.params.id;
    Book.findByIdAndUpdate(id, {$inc: {likes: 1}}, (err, book) => {
        if (err) return next (err);
        res.redirect('/book/' + id)
    })
})

// decrement likes
router.get('/:id/dislike', (req, res, next) => {
    var id = req.params.id;
    Book.findByIdAndUpdate(id, {$inc: {likes: -1}}, (err, book) => {
        if (err) return next (err);
        res.redirect('/book/' + id)
    })
})


module.exports = router;    
