const express = require('express')
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
//own modules
//all pages
const home = require('./routes/home.js');
const prefrence = require('./routes/prefrence.js');

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
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));
        app.set('view engine', 'ejs');
        app.set('views', 'src/views');
    },
    configureRoutes: function(){
        app.use('/', home);
        app.use('/', prefrence);
    }
};

routerSettings.init();