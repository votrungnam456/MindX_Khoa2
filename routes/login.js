var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('My first API!!!');
  });
router.get('/admin', function(req, res, next) {
    res.render('login',{title:'Admin',listUser:['a','b','c']})
  });
router.get('/user', function(req, res, next) {
res.render('login',{title:'User',listUser:['a','b','c']})
});
module.exports = router