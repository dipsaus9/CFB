const express = require('express');
const router = express.Router();
const recipe = require('../recipe.js');
const fakeData = require('../fakeData.js');

router.get('/preference', function(req, res){
  res.render('index.ejs', {data: ''});
});

router.post('/preference', function(req, res){
  let answer = req.body.choice;
  if(answer){
    let obj = {
      data: fakeData,
      recipe: recipe,
      answer: answer
    };
    res.render('prefrence.ejs', {data: obj});
  }
  else{
    res.render('index.ejs', {data: ''});
  }
});

module.exports = router;
