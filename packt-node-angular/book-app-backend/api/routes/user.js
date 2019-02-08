const express = require('express');
const router = express.router();
const mongoose = require('mongoose');
const User = require('../../models/user');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

router.post('/signup', (req, res, next)=>{
  console.log(email)
  const email = req.body.email
  User.find({email: email})
    .exec()
    .then(user=>{
      if(user.lenght > 1){
        return user.status(409).json({
          msg: 'E-mail already exist'
        });
      } else {
        bcrypt.hash(req.body.password, 10,(err, hash)=>{
          if(err){
            return user.status(500).json({
              error:err
            })
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email:req.body.email,
              password:hash,
              name:req.body.name,
              user_type:'user',
            })
            user.save()
            .then(result => {
              return result.status(201).json({
                msg:'User created successfully'
              });
            })
            .catch(err=>{
              return result.status(500).json({
                msg: 'Failed to create user',
                error:err,
              })
            })
          };
        })
      }
    })
});

router.post('/admin-signup', (req, res, next)=>{
  console.log(req.body.email);
  const email = req.body.email;
  User.find({email:email})
    .then(user => {

    })
})