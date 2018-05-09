const express = require('express');
const app = express();
const router = express.Router();
const recipe = require('../recipe.js');
const fakeData = require('../fakeData.js');

router.get('/preference', function(req, res){
  res.render('index.ejs', {data: ''});
});

router.post('/preference', function(req, res){
  let answer = req.body.choice;
  if(answer){
    // let recipes = [];
    // for(let i = 0; i < recipe.length; i++){
    //   for(let k = 0; k < recipe[i].cycle.length; k++){
    //     if(recipe[i].cycle[k].toLowerCase() === answer.toLowerCase()){
    //       recipes.push(recipe[i]);
    //     }
    //   }
    // }
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
