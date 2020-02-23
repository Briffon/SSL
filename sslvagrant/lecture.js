"use strict"
var fs = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();
var session = require('express-session')
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

let ejs = require('ejs');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.post('/register', [
    check('fname', 'First name is required').not().isEmpty(),
    check('lname', ' Last name is required').not().isEmpty(),
    check('addy', 'Address is required').not().isEmpty(),
    check('city', 'City is required').not().isEmpty(),
    check('zip', 'Zip is required and needs to be a number').isInt(),
    check('consent', 'Consent is required and needs to be a number').isEmpty(),
], function (req, res, next) {
    //check validate data
    const result = validationResult(req);
    var errors = result.errors;
    for (var key in errors) {
        console.log(errors[key].value);
    }
    if (!result.isEmpty()) {
        //response validate data to register.ejs
        res.render('register', {
            errors: errors
        })
    }
})

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

router.get('/', function (req, res) {
    req.session.color = 'Blue';
    res.render('index', { pagename: 'index' });
})


// router.get('/sc', function (req, res) {
//     console.log(req.session)
// })

// router.post('/login', function (req, res) {
//     if (req.body.email == 'joe@aol.com') {
//         req.session.loggedin = "1";
//         res.redirect('/profile')
//     } else {
//         res.redirect('/loginForm')
//     }
// })

app.use(express.static('public'));
app.use(express.static(path.join('./', 'client')))
app.use('/', router);
var server = app.listen('8080')