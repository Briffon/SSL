"use strict"

var fs = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');

var express = require('express');
var request = require('request');

let ejs = require('ejs');
const router = express.Router();

var app = express();
app.set('view engine', 'ejs');


var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var session = require('express-session')
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true, cookie: { secure: true } }))
var sess;

router.get('/', function (req, res) {
    sess = req.session;
    res.render('index', { pagename: 'Home', sess: sess });
})

router.get('/login', function (req, res) {
    sess = req.session;
    res.render('login', { pagename: 'Login', sess: sess });
})

router.post('/login', function (req, res) {
    let errors = [];
    // if (req.body.username == "") {
    //     errors.push('username is required')
    // }
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(req.body.email)) {
        errors.push('Email is invalid')
    }

    if (!/(?=.*[0-9])/.test(req.body.password)) {
        errors.push('password is invalid')
    }


    res.render('index', { pagename: 'Home', errors: errors })
})


app.use(express.static('public'));
app.use('/', router);
var server = app.listen('8080')