const express = require('express');
const app = express();
const router = express.Router();
const recipe = require('../recipe.js');

router.get('/prefrence', function(req, res){
  res.render('index.ejs', {data: ''});
});

router.post('/prefrence', function(req, res){
  let answer = req.body.choice;
  if(answer){
    let recipes = [];
    for(let i = 0; i < recipe.length; i++){
      for(let k = 0; k < recipe[i].cycle.length; k++){
        if(recipe[i].cycle[k].toLowerCase() === answer.toLowerCase()){
          recipes.push(recipe[i]);
        }
      }
    }
    console.log(recipes);
    res.render('prefrence.ejs', {data: answer});
  }
  else{
    res.render('index.ejs', {data: ''});
  }
});

module.exports = router;
