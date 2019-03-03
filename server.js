const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const http = require('http');
const cookieParser = require('cookie-parser');
const validator = require('express-validator');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
<<<<<<< HEAD
const flash = require('flash');
=======
const flash = require('connect-flash');
>>>>>>> 34a59a0f4f205246e7f91d3aa5c21b4805b82b2d
const passport = require('passport');


const container = require('./container');



container.resolve(function(users){

    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/fooballkik', {useMongoClient : true});
    
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/footballkik', {useMongoClient: true});

    const app = SetupExpress();

    function SetupExpress(){
        const app = express();
        const server = http.createServer(app);
        server.listen(3000, function(){
            console.log('Listening on port 3000');
        });
        ConfigureExpress(app);

        //Setup router
        const router = require('express-promise-router')();
        users.SetRouting(router);

        app.use(router);
    }

    

    function ConfigureExpress(app){
        app.use(express.static('public'));
        app.use(cookieParser());
        app.set('view engine', 'ejs');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));

        app.use(validator());
        app.use(session({
<<<<<<< HEAD
            secret : 'thisisasecretkey',
            resave : true,
            saveInitialized : true,
            store : new MongoStore({mongooseConnection: mongoose.connection})
        }))
=======
            secret: 'thisissecretkey',
            resave: true,
            saveInitialized: true,
            store: new MongoStore({mongooseConnection: mongoose.connection})
        }));
>>>>>>> 34a59a0f4f205246e7f91d3aa5c21b4805b82b2d

        app.use(flash());

        app.use(passport.initialize());
        app.use(passport.session());
<<<<<<< HEAD

=======
>>>>>>> 34a59a0f4f205246e7f91d3aa5c21b4805b82b2d
    }

});