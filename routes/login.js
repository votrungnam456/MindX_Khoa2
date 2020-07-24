var express = require('express');
var router = express.Router();

const loginController = require('../controllers/loginController')

router.get('/', function(req, res, next) {
  res.send('My first API!!!');
  });
router.get('/admin', function(req, res, next) {
    // loginController(req,res);
    res.render('signin',{title:'Admin'})
  });
router.post('/admin',function(req, res, next) {
  loginController(req,res);
  // console.log(req.body);
});
router.get('/signin', function(req, res, next) {
res.render('signin',{title:'User'})
});
router.get('/signup', function(req, res, next) {
  res.render('signup',{title:'User'})
  });
module.exports = router