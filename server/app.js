const express = require('express')
const app = express();
const http = require('http').Server(app);
//own modules
//all pages
const home = require('./routes/cart.js');

const routerSettings = {
  init: function(){
    this.basicSettings();
    this.configureRoutes();
  },
  basicSettings: function(){
    http.listen(3004, function () {
      console.log('server is running on port 3004');
    });
    app.use(express.static('public'));
    app.set('view engine', 'ejs');
    app.set('views', 'src/views');
  },
  configureRoutes: function(){
    app.use('/', home);
  }
};

routerSettings.init();
