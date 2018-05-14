const express = require('express');
const router = express.Router();
const recipe = require('../recipe.js');

router.get('/result', function(req, res){
  res.render('index.ejs', {data: ''});
});

router.post('/result', function(req, res){
  console.log(req.body);
  let answer = req.body.ingredients;
  if(answer){
    let options = [];
    for(let i = 0; i < recipe.length; i++){
      for(let k = 0; k < recipe[i].ingredients.length; k++){
        if(recipe[i].ingredients[k] === answer){
          options.push(recipe[i]);
        }
      }
    }
    let randomNr = Math.floor(Math.random() * options.length);
    let newAnswer;
    if(req.body.selected.constructor === Array){
      newAnswer = req.body.selected[0];
    }
    else{
      newAnswer = req.body.selected;
    }
    let obj = {
      data: options[randomNr],
      answer: newAnswer
    };
    res.render('result.ejs', {data: obj});
  }
  else{
    res.render('index.ejs', {data: ''});
  }
});

module.exports = router;
