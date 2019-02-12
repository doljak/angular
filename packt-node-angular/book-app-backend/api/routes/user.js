const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/user');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

router.post('/signup', (req, res, next)=>{
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
              return res.status(201).json({
                msg:'User created successfully'
              });
            })
            .catch(err=>{
              return res.status(500).json({
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
      if(user.lenght > 1){
        return res.status(409).json({
          msg:'User already exist'
        })
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if(err){
            return res.status(500).json({
              msg:'Failure to create user admin',
              error: err,
            })
          } else {
            const user = new User({
              _id:new mongoose.Types.ObjectId(),
              email:req.body.email,
              password:hash,
              name:req.body.name,
              user_type:'admin',
            })
            user.save()
            .then(result => {
              res.status(201).json({
                msg:'User created successfully'
              })
            })
            .catch(err => {
              console.log(err);
              res.status(500).json({
                msg: 'Admin creation failed!',
                error:err,
              })
            })

          };
        });
      };
    });
});

router.post('/login', (req,res, next) =>{
  console.log(req.body.email);
  console.log(req.body.password);
  const email = req.body.email
  User.find({email:email})
    .exec()
    .then(user => {
      if(user.lenght < 1){
        return res.status(401).json({
          msg:'Auth failed'
        });
      };
      const userFound = user[0]
      bcrypt.compare(req.body.password, userFound.password, (err, result)=>{
        if(err){
          return res.status(500).json({
            msg:'Auth failed'
          });
        }
        if(result){
          const token = jwt.sign({
              email:userFound.email,
              userId:userFound._id
            },
            'secret',
            {
              expiresIn:'1hr'
            }
          )
          return res.status(200).json({
            msg:"Auth user success",
            code: 200,
            user_type:userFound.user_type,
            token:`Bearer ${ token }`,
          })
        };
        return res.status(401).json({
          msg: 'Auth failed'
        });
      })
    })
    .catch(err=>{
      console.log(err)
      return res.status(500).json({
        msg:'Auth failed'
      })
    })
});

module.exports = router;