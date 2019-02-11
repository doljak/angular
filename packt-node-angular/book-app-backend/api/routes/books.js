const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const checkAut = require('../middleware/check-auth');
const Book = require('../../models/books')

router.get('/all-books', checkAut, (req, res, next)=>{
  Book.find()
    .exec()
    .then(docs => {
      const response = docs.map(doc =>{
        return {
          _id: doc._id,
          isbn: doc.isbn,
          title: doc.title,
          author: doc.author,
          price: doc.price,
        };
      });
      res.status(200).json(response)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        error: err,
      })
    })
});

router.get('/book-details/:bookId', checkAut, (req, res, next)=>{
  Book.find({_id:_id})
    .then(docs=>{
      const response = docs.map(doc=>{
        return {
          _id:res._id,
          isbn: res.isbn,
          title: res.title,
          author: res.title,
          price: res.title,
        }
      });
      res.status(200).json(response);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post('/add-book', checkAut, (req, res, next)=>{
  const book = new Book({
    _id:new mongoose.Types.ObjectId(),
    isbn:req.body.isbn,
    title:req.body.title,
    author:req.body.author,
    price:req.body.price,
  });
  book
  .save()
  .then(result => {
    console.log(result);
    res.status(201).json({
      msg: 'Livro adicionado com sucesso',
    });
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({
      error:err,
    })
  })
});

router.patch('/update-book/:bookId', checkAut, (req, res, next)=>{
  const _id = req.params.bookId
  Book.update({_id:_id}, {$set:req.body})
    .exec()
    .then(result => {
      result.status(200).json({
        msg:'Book updated'
      });
    })
    .catch(err=>{
      console.log(err)
      result.status(500).json({
        error:err,
      });
    });
});

router.delete('/delete-book/bookId', checkAut, (req, res, next)=>{
  const _id = req.params.bookId
  Book.remove({_id:_id})
    .exec()
    .then(result=>{
      console.log(result)
      result.status(200).json({
        msg:'Livro removido com sucesso'
      });
    })
    .catch(err=>{
      console.log(err)
      result.status(500).json({
        error:err,
      });
    });
});

module.exports = router;