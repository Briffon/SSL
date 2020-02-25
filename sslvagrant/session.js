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
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.engine('ejs', require('ejs').__express);
app.use(express.static(path.join(__dirname, "public")));

var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var session = require('express-session')
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
var sess;

router.get('/', function (req, res) {
    sess = req.session;
    res.render('index', { pagename: "Home", sess: sess })
})

router.get('/about', function (req, res) {
    sess = req.session;
    res.render('about', { pagename: 'About', sess: sess });

})
// router.get('/profile', function (req, res) {
//     sess = req.session;
//     if (typeof (sess) == "undefined" || sess.loggedin != true) {
//         var errors = ["not a authenticated user"];
//         res.render('index', { pagename: 'Home', errors: errors })
//     } else {
//         res.render('profile', { pagename: 'Profile', sess: sess })
//     }


//     router.get("/logout", function (req, res) {
//         sess = req.session;
//         sess.destroy(function (err) {
//             res.redirect('/');
//         })
//     })

//     router.post('/login', function (req, res) {
//         var errors = [];

//         if (req.body.email == '') {
//             errors.push('Email is required');
//         }

//         if (req.body.password == "") {
//             errors.push('Password is required')
//         }

//         if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(req.body / email)) {
//             errors.push('Email is not valid')
//         }

//         if (/?=.*[0-9]/.test(req.body.password)) {
//             errors.push('Password is not valid')
//         }
//         sess = req.session;
//         sess.loggedin = true;
//         res.render('profile', { pagename: 'Profile', sess: sess });

//     })


app.use(express.static(path.join('./', 'client')))
app.use('/', router);
var server = app.listen('8080')